import React from 'react';
import {Box, Divider, Slide, Typography} from '@mui/material';
import LeagueDropdown from './LeagueDropdown';
import TeamDropdown from './TeamDropdown';

const containerStyles = {
    overflow: 'hidden',
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 2s ease, opacity 1s ease',
    height: '120px',
    width:"100%",
};

const dropdownContainerStyles = {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    marginTop:1,
    flexDirection: { xs: 'column', sm: 'row' }, // Stacks vertically on small screens

};
export default function SelectLeagueAndTeam({handleLeagueSelect, handleTeamSelect, selectedLeague}) {
    return (<Box sx={containerStyles}>
            <Box sx={dropdownContainerStyles}>
                <LeagueDropdown onLeagueSelect={handleLeagueSelect}/>
                <TeamDropdown selectedLeague={selectedLeague} onTeamSelect={handleTeamSelect}/>
            </Box>
        </Box>
    );
}
