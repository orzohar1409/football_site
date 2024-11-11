import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, LinearProgress, Typography } from '@mui/material';
import config from "../config";
import LeagueDropdown from './LeagueDropdown';
import L from 'leaflet';
import mapIcon from '../assets/flag_icon_264113.png';

// Function to create a custom icon using the provided mapIcon
export function createCustomIcon() {
    return new L.Icon({
        iconUrl: mapIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        shadowSize: [41, 41]
    });
}

function MapCenter({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 6);
        }
    }, [center, map]);
    return null;
}
export default function VenuesPage() {
    const [leagueId, setLeagueId] = useState(null);
    const [leagueName, setLeagueName] = useState(''); // Track selected league name
    const [venueMarkers, setVenueMarkers] = useState([]);
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const mapCenter = venueMarkers.length > 0 ? [venueMarkers[0].lat, venueMarkers[0].lon] : [51.505, -0.09];

    useEffect(() => {
        async function fetchVenues() {
            if (!leagueId) {
                return;
            }
            try {
                const url = `${config.API_GET_VENUES}/${leagueId}`;
                const response = await fetch(url);
                const venues = await response.json();

                const totalVenues = venues.length;
                let fetchedVenues = 0;
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

                    fetchedVenues += 1;
                    setProgress((fetchedVenues / totalVenues) * 100);

                    await new Promise(resolve => setTimeout(resolve, 1000));
                }

                setVenueMarkers(markers);
                setIsFinished(true);
            } catch (error) {
                console.error("Error fetching venues:", error);
            }
        }

        fetchVenues();
    }, [leagueId]);

    const handleLeagueChange = (newLeagueId, newLeagueName) => {
        setLeagueId(newLeagueId);
        setLeagueName(newLeagueName); // Set league name when changed
        setVenueMarkers([]);
        setProgress(0);
        setIsFinished(false);
    };

    return (
        <Box sx={{ height: '70vh', width: '100%'}}>
                <Typography variant="h6" sx={{ padding: 2 }}>
                    Select a league to see its venues!
                </Typography>

            <Box sx={{ maxWidth: 500, width: '100%', padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <LeagueDropdown leagueId={leagueId} onLeagueSelect={handleLeagueChange} />
                {leagueId && progress < 100 && !isFinished && (
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1">Fetching venues... {Math.round(progress)}% completed</Typography>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                )}
            </Box>
            <MapContainer center={mapCenter} zoom={5} style={{ height: '100%', width: '100%' }}>
                <MapCenter center={mapCenter} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {venueMarkers.map((marker, index) => (
                    <Marker key={index} position={[marker.lat, marker.lon]} icon={createCustomIcon()}>
                        <Popup maxWidth={1000}>
                            <strong>{marker.name}</strong><br />
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                                <img src={marker.team_logo} alt={`${marker.team_name} logo`} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                <strong>{marker.team_name}</strong>
                            </Box>
                            {marker.address}<br />
                            {marker.city} {marker.country}<br />
                            <img src={marker.image} alt={`${marker.name}`} style={{ width: '150px', marginTop: '5px' }} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
}