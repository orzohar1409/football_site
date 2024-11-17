import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Divider } from '@mui/material';
import LeagueTeamSelect from './LeagueTeamSelect'; // Assuming a reusable component for league/team selection
import axios from 'axios';
import { useAppContext } from '../AppContext';
import sharedConfig from "../config";
import SelectLeagueAndTeam from "./LeagueTeamSelect"; // For global context

const fallbackImage = 'https://media.api-sports.io/football/players/340077.png';

export default function SquadPage() {
    const { selectedLeague, selectedTeam } = useAppContext(); // Context for selected league and team
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedTeam) {
            const fetchSquad = async () => {
                try {
                    const response = await axios.get(`${sharedConfig.API_GET_SQUADS}/${selectedTeam.id}`); // Replace with actual endpoint
                    setPlayers(response.data); // Adjust based on API response structure
                    setError(null);
                } catch (err) {
                    console.error('Error fetching squad:', err);
                    setError('Unable to load squad data.');
                }
            };
            fetchSquad();
        } else {
            setPlayers([]);
        }
    }, [selectedTeam]);

    const handleLeagueSelect = () => {}

    const handleTeamSelect = () => {}

    return (
        <Box sx={{ padding: 1 }}>
            <Typography variant="h4" sx={{ padding: 1 }}>
                Select league and team to see its squad
            </Typography>
            <SelectLeagueAndTeam
                handleLeagueSelect={handleLeagueSelect}
                handleTeamSelect={handleTeamSelect}
                selectedLeague={selectedLeague} />
            {error && <Typography color="error">{error}</Typography>}
            {selectedTeam && (
                <Box sx={{ marginTop: 4, textAlign: "center" }}>
                    <Typography variant="h6" align="center" gutterBottom
                                sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <img src={selectedTeam.logo} alt={`${selectedTeam.name} logo`}
                             style={{ marginLeft: 8, marginRight: 8, height: 40 }} />
                        {selectedTeam.name} Squad
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Grid container spacing={4}>
                        {players.map((player) => (
                            <Grid item key={player.id} xs={6} sm={2} md={2}>
                                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        image={player.photo}
                                        alt={`${player.name} photo`}
                                        sx={{ objectFit: 'cover' }}
                                        onError={(e) => e.target.src = fallbackImage} // Use fallback image on error
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {player.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Age: {player.age} <br/>
                                            Position: {player.position} <br/>
                                            Number: {player.number || 'N/A'}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
}
