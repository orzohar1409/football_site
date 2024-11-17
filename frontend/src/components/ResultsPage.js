import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import GameTable from './GameTable';
import SelectLeagueAndTeam from "./LeagueTeamSelect";
import config from "../config";
import { useAppContext } from "../AppContext";

const getGamesUrl = (leagueId, teamId) => `${config.API_GET_ALL_GAMES}/${leagueId}/${teamId}`;

export default function ResultsPage() {
    const { selectedLeague, selectedTeam } = useAppContext();
    const [games, setGames] = useState([]);
    const [showGames, setShowGames] = useState(false);
    const [loading, setLoading] = useState(false); // State for loading spinner
    const [error, setError] = useState(null);

    const handleLeagueSelect = () => {
        setShowGames(false);
    };

    const handleTeamSelect = () => {
        setShowGames(true);
    };

    useEffect(() => {
        if (selectedTeam && selectedLeague) {
            async function fetchGames() {
                setLoading(true); // Start loading spinner
                try {
                    const response = await axios.get(getGamesUrl(selectedLeague.id, selectedTeam.id));
                    setGames(response.data);
                    setError(null); // Clear error if successful
                } catch (error) {
                    console.error('Error fetching games:', error);
                    setError('Failed to fetch game data. Please try again later.');
                } finally {
                    setLoading(false); // Stop loading spinner
                }
            }

            fetchGames();
        } else {
            setGames([]);
        }
    }, [selectedTeam, selectedLeague]);

    return (
        <Box sx={{ padding: 0 }}>
            <Typography variant="h4" sx={{padding: 1}}>
                Select league and team to see its results
            </Typography>
            <SelectLeagueAndTeam
                handleLeagueSelect={handleLeagueSelect}
                handleTeamSelect={handleTeamSelect}
                selectedLeague={selectedLeague} />
            {error && <Typography color="error">{error}</Typography>}
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
                    <CircularProgress /> {/* Loading spinner */}
                </Box>
            ) : (
                selectedTeam && selectedLeague && (
                    <Box sx={{ marginTop: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Results
                        </Typography>
                        <GameTable games={games} />
                    </Box>
                )
            )}
        </Box>
    );
}
