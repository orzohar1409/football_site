// src/YourTeamGames.js
import React, {useState, useEffect} from 'react';
import {Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import axios from 'axios';
import LeagueDropdown from './LeagueDropdown';
import TeamDropdown from './TeamDropdown';
import GameTable from './GameTable';
import SelectLeagueAndTeam from "./LeagueTeamSelect";
import config from "../config";

export default function YourTeamGames() {
    const [selectedLeague, setSelectedLeague] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [games, setGames] = useState([]);
    const [showGames, setShowGames] = useState(false);

    const handleLeagueSelect = (leagueId) => {
        setSelectedLeague(leagueId);
        setSelectedTeam('');
        setShowGames(false);
    };

    const handleTeamSelect = (teamId) => {
        setSelectedTeam(teamId);
        setShowGames(true);
    };

    useEffect(() => {
        if (selectedTeam) {
            async function fetchGames() {
                try {
                    const response = await axios.get(`${config.API_GET_ALL_GAMES}/${selectedLeague}/${selectedTeam}`);
                    setGames(response.data);
                } catch (error) {
                    console.error('Error fetching games:', error);
                }
            }

            fetchGames();
        } else {
            setGames([]);
        }
    }, [selectedTeam]);

    return (
        <Box sx={{p: 3}}>
            <SelectLeagueAndTeam
                handleLeagueSelect={handleLeagueSelect}
                handleTeamSelect={handleTeamSelect}
                selectedLeague={selectedLeague}/>
            {showGames && (
                <Box sx={{mt: 4}}>
                    <Typography variant="h6" gutterBottom>
                        Results
                    </Typography>
                    <GameTable games={games}/>
                </Box>
            )}
        </Box>
    );
}
