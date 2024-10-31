// src/App.js
import React from 'react';
import { Box } from '@mui/material';
import YourTeamGames from './YourTeamGames';
import ResumePage from './ResumePage';
import SideDrawer from './SideDrawer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import backgroundImage from '../backgrounds/view-soccer-field-with-grass.jpg';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default function MainContent({ isDrawerOpen }) {
    const location = useLocation();
    const isGamePage = location.pathname === '/';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on larger screens
                marginTop: { xs: '56px', sm: '64px' }, // Adjust top margin for mobile
                minHeight: '100vh',

                width: '100%',
                overflowX: 'hidden' // Prevent horizontal scroll on mobile
            }}
        >
            <SideDrawer isOpen={isDrawerOpen} />

            {/* Main content area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: 'margin-left 0.3s ease', // Smooth transition for drawer effect
                    marginLeft: isDrawerOpen ? '240px' : '0', // Adjust margin based on drawer state
                    width: isDrawerOpen ? `calc(100% - 240px)` : '100%', // Shrink width when drawer is open
                }}
            >
                <Routes>
                    <Route path="/" element={<YourTeamGames />} />
                    <Route path="/resume" element={<ResumePage />} />
                </Routes>
            </Box>
        </Box>
    );
}
