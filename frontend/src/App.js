// src/App.js
import React, {useState} from 'react';
import TopAppBar from './components/TopAppBar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainContent from './components/MainContent';
import './App.css';
import {responsiveFontSizes} from "@mui/material";
import {AppProvider, useAppContext} from "./AppContext";

let theme = createTheme({
    typography: {
        fontSize: 10, // Base font size for the entire theme
        h1: { fontSize: '2.2rem' },
        h2: { fontSize: '1.8rem' },
        h3: { fontSize: '1.5rem' },
        h4: { fontSize: '1.3rem' },
        h5: { fontSize: '1.1rem' },
        h6: { fontSize: '1rem' },
        body1: { fontSize: '0.875rem' },
        body2: { fontSize: '0.75rem' },
    },
});

theme = responsiveFontSizes(theme);
function App() {

    return (<AppProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <TopAppBar/>
                    <MainContent/>
                </Router>
            </ThemeProvider>
    </AppProvider>
    );
}

export default App;
