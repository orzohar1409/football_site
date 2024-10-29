// src/YourTeamGames.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import LeagueDropdown from './components/LeagueDropdown';
import TeamDropdown from './components/TeamDropdown';
import config from "./config";
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
                const response = await axios.get(`${config.API_GET_ALL_LEAGUES}`);
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
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Select League and Team
            </Typography>
            <LeagueDropdown onLeagueSelect={handleLeagueSelect} />
            <TeamDropdown selectedLeague={selectedLeague} onTeamSelect={handleTeamSelect} />

            {showGames && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Upcoming Games
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Opponent</TableCell>
                                    <TableCell>Location</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {games.map((game, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{game.date}</TableCell>
                                        <TableCell>{game.time}</TableCell>
                                        <TableCell>{game.opponent}</TableCell>
                                        <TableCell>{game.location}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Box>
    );
}
