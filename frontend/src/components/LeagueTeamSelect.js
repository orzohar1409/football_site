import React from 'react';
import {Box, Slide, Typography} from '@mui/material';
import LeagueDropdown from './LeagueDropdown';
import TeamDropdown from './TeamDropdown';

const containerStyles = {
    overflow: 'hidden',
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 2s ease, opacity 1s ease',
    mb: 1,
    height: '120px',
};

const dropdownContainerStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
};
export default function SelectLeagueAndTeam({handleLeagueSelect, handleTeamSelect, selectedLeague}) {
    return (<Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Box sx={containerStyles}>
            <Typography variant="h5" gutterBottom>
                Select League and Team
            </Typography>
            <Box sx={dropdownContainerStyles}>
                <LeagueDropdown onLeagueSelect={handleLeagueSelect}/>
                <TeamDropdown selectedLeague={selectedLeague} onTeamSelect={handleTeamSelect}/>
            </Box>
        </Box></Slide>
    );
}
