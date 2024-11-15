import React, {useState, useEffect} from 'react';
import {Autocomplete, TextField, Avatar, Box} from '@mui/material';
import axios from 'axios';
import config from "../config";
import {useAppContext} from "../AppContext";

export default function TeamDropdown({onTeamSelect}) {
    const {teams, setTeams} = useAppContext();
    const {selectedTeam, setSelectedTeam} = useAppContext();
    const {selectedLeagueId} = useAppContext();
    useEffect(() => {
        if (selectedLeagueId) {
            async function fetchTeams() {
                try {
                    const response = await axios.get(`${config.API_GET_ALL_TEAMS}/${selectedLeagueId}`);
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
    }, [selectedLeagueId]);

    const handleTeamChange = (event, newTeam) => {
        setSelectedTeam(newTeam);
        onTeamSelect();
    };

    return (
        <Autocomplete
            options={teams}
            getOptionLabel={(option) => option.name}
            value={selectedTeam}
            onChange={handleTeamChange}
            style={{ width: "50%"}}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
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
                <Box component="li" {...props} sx={{display: 'flex', alignItems: 'center'}} key={option.id}>
                    <Avatar
                        src={option.logo}
                        alt={`${option.name} logo`}
                        sx={{width: 20, height: 20, marginRight: 1}}
                    />
                    {option.name}
                </Box>
            )}
        />
    );
}
