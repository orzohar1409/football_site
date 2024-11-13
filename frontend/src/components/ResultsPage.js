// src/ResultsPage.js
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import GameTable from './GameTable';
import SelectLeagueAndTeam from "./LeagueTeamSelect";
import config from "../config";
import GameWidget from "./GameWidget";
import { useAppContext } from "../AppContext";
const getGamesUrl = (leagueId, teamId) => `${config.API_GET_ALL_GAMES}/${leagueId}/${teamId}`;

export default function ResultsPage() {
    const {selectedLeague} = useAppContext();
    const {selectedTeam} = useAppContext();
    const [games, setGames] = useState([]);
    const [showGames, setShowGames] = useState(false);
    const [error, setError] = useState(null);


    const handleLeagueSelect = () => {
        setShowGames(false);
    };

    const handleTeamSelect = () => {
        setShowGames(true);
    };

    useEffect(() => {
        if (selectedTeam) {
            async function fetchGames() {
                try {
                    const response = await axios.get(getGamesUrl(selectedLeague.id, selectedTeam.id));
                    setGames(response.data);
                    setError(null); // Clear error if successful
                } catch (error) {
                    console.error('Error fetching games:', error);
                    setError('Failed to fetch game data. Please try again later.');
                }
            }

            fetchGames();
        } else {
            setGames([]);
        }
    }, [selectedTeam]);

    return (
        <Box sx={{padding: 3}}>
            <SelectLeagueAndTeam
                handleLeagueSelect={handleLeagueSelect}
                handleTeamSelect={handleTeamSelect}
                selectedLeague={selectedLeague}/>
            {error && <Typography color="error">{error}</Typography>}
            {showGames && (
                <Box sx={{marginTop: 4}}>
                    <Typography variant="h6" gutterBottom>
                        Results
                    </Typography>
                    <GameTable games={games}/>
                </Box>
            )}
        </Box>
    );
}
