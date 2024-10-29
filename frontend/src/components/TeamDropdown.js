import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Avatar, Box } from '@mui/material';
import axios from 'axios';
import config from "../config";

export default function TeamDropdown({ selectedLeague, onTeamSelect }) {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        if (selectedLeague) {
            async function fetchTeams() {
                try {
                    const response = await axios.get(`${config.API_GET_ALL_TEAMS}/${selectedLeague}`);
                    setTeams(response.data);
                } catch (error) {
                    console.error('Error fetching teams:', error);
                }
            }
            fetchTeams();
        } else {
            setTeams([]);
            setSelectedTeam(null);
        }
    }, [selectedLeague]);

    const handleTeamChange = (event, newTeam) => {
        setSelectedTeam(newTeam);
        onTeamSelect(newTeam ? newTeam.id : null);
    };

    return (
        <Autocomplete
            options={teams}
            getOptionLabel={(option) => option.name}
            value={selectedTeam}
            onChange={handleTeamChange}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
            sx={{ width: 200 }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select Team"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedTeam ? (
                            <Avatar
                                src={selectedTeam.logo}
                                alt={selectedTeam.name}
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
