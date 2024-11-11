// src/components/VenuesPage.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

export default function VenuesPage({ venues }) {
    const [venueMarkers, setVenueMarkers] = useState([]);

    useEffect(() => {
        async function fetchCoordinatesForVenues() {
            const markers = await Promise.all(
                venues.map(async (venue) => {
                    const { street, city, country, name } = venue;
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/search?street=${encodeURIComponent(street)}&city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&format=json`
                        );
                        const data = await response.json();

                        if (data && data.length > 0) {
                            const { lat, lon } = data[0];
                            return { name, lat: parseFloat(lat), lon: parseFloat(lon) };
                        } else {
                            console.error(`Location not found for ${name}`);
                            return null;
                        }
                    } catch (error) {
                        console.error(`Error fetching coordinates for ${name}:`, error);
                        return null;
                    }
                })
            );
            setVenueMarkers(markers.filter(marker => marker !== null));
        }

        fetchCoordinatesForVenues();
    }, [venues]);

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
                            {marker.name}<br />{marker.city}, {marker.county}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
}
