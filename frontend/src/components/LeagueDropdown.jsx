// src/components/LeagueDropdown.js
import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Avatar, Box } from '@mui/material';
import axios from 'axios';
import config from "../config";

export default function LeagueDropdown({ onLeagueSelect }) {
    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);

    useEffect(() => {
        async function fetchLeagues() {
            try {
                const response = await axios.get(config.API_GET_ALL_LEAGUES);
                setLeagues(response.data);
            } catch (error) {
                console.error('Error fetching leagues:', error);
            }
        }
        fetchLeagues();
    }, []);

    const handleLeagueChange = (event, newLeague) => {
        setSelectedLeague(newLeague);
        onLeagueSelect(newLeague ? newLeague.id : null);
    };

    return (
        <Autocomplete
            options={leagues}
            getOptionLabel={(option) => option.name}
            value={selectedLeague}
            onChange={handleLeagueChange}
            style={{ width: 300 }}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select League"
                    variant="outlined"
                    size="medium"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedLeague ? (
                            <Avatar
                                src={selectedLeague.logo}
                                alt={selectedLeague.name}
                                sx={{ width: 20, height: 20, marginRight: 1 }}
                            />
                        ) : null,
                    }}
                />
            )}
            renderOption={(props, option) => (
                <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        src={option.logo}
                        alt={`${option.name} logo`}
                        sx={{ width: 20, height: 20, marginRight: 1 }}
                    />
                    {option.name}
                </Box>
            )}
        />
    );
}
