// src/components/LeagueDropdown.js
import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Avatar, Box } from '@mui/material';
import axios from 'axios';
import config from "../config";
import {useAppContext} from "../AppContext";

export default function LeagueDropdown({ onLeagueSelect }) {
    const {selectedLeague, setSelectedLeague} = useAppContext();
    const {setSelectedLeagueId} = useAppContext();
    const {allLeagues, setAllLeagues} = useAppContext();
    const {error, setError} = useAppContext();
    const {setSelectedTeam} = useAppContext();
    useEffect(() => {
        async function fetchLeagues() {
            try {
                const response = await axios.get(config.API_GET_ALL_LEAGUES);
                setAllLeagues(response.data);
                setError(null); // Clear error if successful
            } catch (error) {
                console.error('Error fetching leagues:', error);
                setError('Failed to load leagues. Please try again later.');
            }
        }
        fetchLeagues();
    }, []);

    const handleLeagueChange = (event, newLeague) => {
        setSelectedLeague(newLeague ? newLeague : null);
        setSelectedLeagueId(newLeague ? newLeague.id : null);
        if(newLeague){
            setSelectedTeam(null);
        }
        onLeagueSelect();
    };

    return (
        <Autocomplete
            options={allLeagues}
            getOptionLabel={(option) => option.name}
            value={selectedLeague || null}
            onChange={handleLeagueChange}
            style={{ width: "50%"}}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select League"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedLeague ? (
                            <Avatar
                                src={selectedLeague.logo}
                                alt={selectedLeague.name}
                                sx={{ width: 20, height: 20, marginRight: 0.2, fontSize:5 }}
                            />
                        ) : null,
                        endAdornment: (
                            <Box sx={{ '& svg': { fontSize: 14 }, '& button': { fontSize: 14 } }}>
                                {params.InputProps.endAdornment}
                            </Box>
                        ),
                    }}
                />
            )}
            renderOption={(props, option) => (
                <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center' }} key={option.id}>
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
