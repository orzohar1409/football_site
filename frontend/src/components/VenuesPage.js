import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, LinearProgress, Typography } from '@mui/material';
import config from "../config";
import L from 'leaflet';
import mapIcon from '../assets/flag_icon_264113.png'; // Ensure this path points to your custom icon

// Function to create a custom icon using the provided mapIcon
export function createCustomIcon(url) {
    return new L.Icon({
        iconUrl: mapIcon,
        iconSize: [25, 41], // You can adjust the size as needed
        iconAnchor: [12, 41], // Adjust the anchor point as needed
        popupAnchor: [1, -34],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Leaflet's default shadow icon
        shadowSize: [41, 41]
    });
}

export default function VenuesPage({ leagueId = 39 }) {
    const [venueMarkers, setVenueMarkers] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        async function fetchVenues() {
            try {
                // Step 1: Fetch venues from your backend
                const url = `${config.API_GET_VENUES}/${leagueId}`;
                const response = await fetch(url);
                const venues = await response.json();

                // Step 2: Initialize progress variables
                const totalVenues = venues.length;
                let fetchedVenues = 0;

                // Step 3: Fetch coordinates for each venue with a delay and update progress
                const markers = [];
                for (const venue of venues) {
                    const { address, city, country, name, image, team_name, team_logo } = venue;
                    const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(name)}&format=json`;

                    try {
                        const nominatimResponse = await fetch(nominatimUrl);
                        const data = await nominatimResponse.json();

                        if (data && data.length > 0) {
                            const { lat, lon } = data[0];
                            markers.push({
                                name,
                                address,
                                city,
                                country,
                                image,
                                team_name,
                                team_logo,
                                lat: parseFloat(lat),
                                lon: parseFloat(lon),
                            });
                        } else {
                            console.error(`Coordinates not found for venue: ${name}`);
                        }
                    } catch (error) {
                        console.error(`Error fetching coordinates for ${name}:`, error);
                    }

                    // Update progress
                    fetchedVenues += 1;
                    setProgress((fetchedVenues / totalVenues) * 100);

                    // Wait 1 second before the next request to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }

                // Set markers after fetching all locations
                setVenueMarkers(markers);
            } catch (error) {
                console.error("Error fetching venues:", error);
            }
        }

        if (leagueId) {
            fetchVenues();
        }
    }, [leagueId]);

    return (
        <Box sx={{ height: '80vh', width: '100%' }}>
            {progress < 100 && (
                <Box sx={{ width: '100%', padding: 2 }}>
                    <Typography variant="body1">Loading venues... {Math.round(progress)}%</Typography>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
            )}
            <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {venueMarkers.map((marker, index) => (
                    <Marker key={index} position={[marker.lat, marker.lon]} icon={createCustomIcon()}>
                        <Popup maxWidth={200}>
                            <strong>{marker.name}</strong><br />
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                                <img src={marker.team_logo} alt={`${marker.team_name} logo`} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                <strong>{marker.team_name}</strong> {/* Bold team name */}
                            </Box>
                            {marker.address}<br />
                            {marker.city}, {marker.country}<br />
                            <img src={marker.image} alt={`${marker.name}`} style={{ width: '150px', marginTop: '5px' }} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
}
