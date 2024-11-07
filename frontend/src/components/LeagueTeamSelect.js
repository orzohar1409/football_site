import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import LeagueDropdown from './LeagueDropdown';
import TeamDropdown from './TeamDropdown';

export default function SelectLeagueAndTeam({ handleLeagueSelect, handleTeamSelect, selectedLeague }) {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <Box
            sx={{
                overflow: 'hidden',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
                transition: 'transform 2s ease, opacity 1s ease',
                backdropFilter: 'blur(8px)', // Blur effect
                borderRadius: '8px', // Optional: rounded corners
                mb: 2,
                height: '120px'  // Fixed height for the dropdown area
            }}
        >

            <Typography variant="h5" gutterBottom>
                Select League and Team
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <LeagueDropdown onLeagueSelect={handleLeagueSelect} />
                <TeamDropdown selectedLeague={selectedLeague} onTeamSelect={handleTeamSelect} />
            </Box>
        </Box>
    );
}
