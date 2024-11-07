// src/App.js
import React, { useState } from 'react';
import TopAppBar from './components/TopAppBar';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContent from './components/MainContent';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <TopAppBar onMenuClick={toggleDrawer} isDrawerOpen={isDrawerOpen}/>
                <MainContent isDrawerOpen={isDrawerOpen} />
            </Router>
        </ThemeProvider>
    );
}

export default App;
