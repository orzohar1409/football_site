// src/App.js
import React, { useState } from 'react';
import TopAppBar from './components/TopAppBar';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContent from './components/MainContent';
import './App.css';
import {responsiveFontSizes} from "@mui/material";


let theme = createTheme();
theme = responsiveFontSizes(theme);
function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <TopAppBar onMenuClick={toggleDrawer} isDrawerOpen={isDrawerOpen} />
                <MainContent isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            </Router>
        </ThemeProvider>
    );
}

export default App;
