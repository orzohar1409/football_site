// src/components/LeagueDropdown.js
import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import config from '../config';
export default function LeagueDropdown({ onLeagueSelect }) {
    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState('');

    useEffect(() => {
        async function fetchLeagues() {
            try {
                const response = await axios.get(`${config.API_GET_ALL_LEAGUES}`);
                setLeagues(response.data);
                console.log("Leagues data:", response.data);  // Logs the leagues data

            } catch (error) {
                console.error('Error fetching leagues:', error);
            }
        }
        fetchLeagues();
    }, []);

    const handleChange = (event) => {
        const leagueId = event.target.value;
        setSelectedLeague(leagueId);
        onLeagueSelect(leagueId); // Pass selected league to parent component
    };

    return (
        <FormControl variant="outlined" sx={{ minWidth: 200, mr: 2 }}>
            <InputLabel>League</InputLabel>
            <Select
                value={selectedLeague}
                onChange={handleChange}
                label="League"
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                            overflowY: 'scroll',
                        },
                    },
                }}
            >
                {leagues.map((league) => (
                    <MenuItem key={league.id} value={league.id} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={league.logo}
                            alt={`${league.name} logo`}
                            style={{ width: 20, height: 20, marginRight: 8 }}
                        />
                        {league.name}
                    </MenuItem>
                ))}
            </Select>

        </FormControl>
    );
}
