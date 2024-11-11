// src/components/VenuesPage.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import config from "../config";

export default function VenuesPage({ leagueId = 39}) {
    const [venueMarkers, setVenueMarkers] = useState([]);

    useEffect(() => {
        async function fetchVenues() {
            try {
                // Step 1: Fetch venues from your backend
                const url = `${config.API_GET_VENUES}/${leagueId}`;
                const response = await fetch(url);
                const venues = await response.json();

                // Step 2: For each venue, get latitude and longitude from Nominatim
                const markers = await Promise.all(
                    venues.map(async (venue) => {
                        const { address, city, country, name, image } = venue;
                        const nominatimUrl = `https://nominatim.openstreetmap.org/search?street=${encodeURIComponent(address)}&city=${encodeURIComponent(city)}&format=json`;

                        try {
                            const nominatimResponse = await fetch(nominatimUrl);
                            const data = await nominatimResponse.json();

                            if (data && data.length > 0) {
                                const { lat, lon } = data[0];
                                return {
                                    name,
                                    address,
                                    city,
                                    country,
                                    image,
                                    lat: parseFloat(lat),
                                    lon: parseFloat(lon),
                                };
                            } else {
                                console.error(`Coordinates not found for venue: ${name}`);
                                return null;
                            }
                        } catch (error) {
                            console.error(`Error fetching coordinates for ${name}:`, error);
                            return null;
                        }
                    })
                );

                // Filter out any null markers (venues without valid coordinates)
                setVenueMarkers(markers.filter(marker => marker !== null));
            } catch (error) {
                console.error("Error fetching venues:", error);
            }
        }

        if (leagueId) {
            fetchVenues();
        }
    }, [leagueId]);

    return (
        <Box sx={{ height: '100vh', width: '100%' }}>
            <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {venueMarkers.map((marker, index) => (
                    <Marker key={index} position={[marker.lat, marker.lon]}>
                        <Popup>
                            <strong>{marker.name}</strong><br />
                            {marker.address}<br />
                            {marker.city}, {marker.country}<br />
                            <img src={marker.image} alt={`${marker.name} venue`} style={{ width: '100px', marginTop: '5px' }} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
}
