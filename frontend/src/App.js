// src/App.js
import React, {useState} from 'react';
import TopAppBar from './components/TopAppBar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainContent from './components/MainContent';
import './App.css';
import {responsiveFontSizes} from "@mui/material";
import {AppProvider, useAppContext} from "./AppContext";

let theme = createTheme();
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
