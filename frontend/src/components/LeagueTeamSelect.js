import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import LeagueDropdown from './LeagueDropdown';
import TeamDropdown from './TeamDropdown';

export default function SelectLeagueAndTeam({ handleLeagueSelect, handleTeamSelect, selectedLeague }) {
    const [isVisible, setIsVisible] = useState(true);
    const timerRef = useRef(null); // Ref to store the timer

    const handleMouseEnter = () => {
        clearTimeout(timerRef.current); // Clear any existing timer
        setIsVisible(true); // Show component immediately on mouse enter
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setIsVisible(false); // Hide component after delay on mouse leave
        }, 2000); // Delay time in milliseconds
    };

    // Cleanup the timer on component unmount
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <Box
            sx={{
                overflow: 'hidden',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
                transition: 'transform 2s ease, opacity 1s ease',
                mb: 2,
                height: '120px'  // Fixed height for the dropdown area
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
