import React, {useEffect} from 'react';
import TopAppBar from './components/TopAppBar';
import {HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import MainContent from './components/MainContent';
import './App.css';
import { AppProvider } from './AppContext';
import {CssBaseline} from "@mui/material";
import theme from './theme';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.zoom = "70%";
        return () => {
            // Clean up logic if needed in the future
        };
        }, [pathname]);

    return null;
}
function App() {

    return (
        // Context Provider
        <AppProvider>
            // Theme Application
            <ThemeProvider theme={theme}>
                <CssBaseline />
                // Routing
                <Router>
                    <ScrollToTop />
                    <TopAppBar />
                    <MainContent />
                </Router>
            </ThemeProvider>
        </AppProvider>
    );
}

export default App;
