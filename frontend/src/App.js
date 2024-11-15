import React, {useEffect} from 'react';
import TopAppBar from './components/TopAppBar';
import {HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import MainContent from './components/MainContent';
import './App.css';
import { AppProvider } from './AppContext';
import {CssBaseline} from "@mui/material";

let theme = createTheme({
    typography: {
        fontSize: 12, // Default base font size
        h1: {
            fontSize: '2.2rem',
            '@media (max-width:600px)': { fontSize: '1.8rem' }, // Smaller screen
        },
        h2: {
            fontSize: '1.8rem',
            '@media (max-width:600px)': { fontSize: '1.6rem' },
        },
        h3: {
            fontSize: '1.5rem',
            '@media (max-width:600px)': { fontSize: '1.3rem' },
        },
        h4: {
            fontSize: '1.3rem',
            '@media (max-width:600px)': { fontSize: '1.1rem' },
        },
        h5: {
            fontSize: '1.1rem',
            '@media (max-width:600px)': { fontSize: '1rem' },
        },
        h6: {
            fontSize: '1rem',
            '@media (max-width:600px)': { fontSize: '0.9rem' },
        },
        body1: {
            fontSize: '0.875rem',
            '@media (max-width:600px)': { fontSize: '0.75rem' },
        },
        body2: {
            fontSize: '0.75rem',
            '@media (max-width:600px)': { fontSize: '0.7rem' },
        },
    },
});

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
function App() {

    return (<AppProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <ScrollToTop />
                    <TopAppBar/>
                    <MainContent/>
                </Router>
            </ThemeProvider>
    </AppProvider>
    );
}

export default App;
