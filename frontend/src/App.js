// src/App.js
import React, {useState} from 'react';
import TopAppBar from './components/TopAppBar';
import SideMenu from './components/SideMenu';
import YourTeamGames from './components/MainAppPage';
import {HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';
import {Box} from '@mui/material';
import MainAppPage from "./components/MainAppPage";

let theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif'
    }
});

theme = responsiveFontSizes(theme);

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [page, setPage] = useState('YourTeamGames');
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box sx={{position: 'fixed', top: 0, width: '100%', height: 64, zIndex: theme.zIndex.drawer + 1}}>
                    <TopAppBar onMenuClick={toggleDrawer}/>
                </Box>
                <Box sx={{display: 'flex', marginTop: '64px', height: 'calc(100vh - 64px)'}}>
                    <Box
                        sx={{
                            width: isDrawerOpen ? {xs: "50%", sm: "30%", md: "20%", lg: "15%"} : 0, // Adjusts width based on drawer state
                            transition: 'width 0.3s ease', // Smooth transition when opening/closing
                            overflow: 'hidden', // Hides content when drawer is closed
                        }}
                    >
                        <SideMenu isOpen={isDrawerOpen}/>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            padding: 2,
                            marginTop: 64, // Adjust top margin to make room for the App Bar
                            transition: 'margin-left 0.3s ease', // Smooth transition
                            marginLeft: isDrawerOpen ? {xs: '50%', sm: '30%', md: '20%', lg: '15%'} : 0, // Adjust margin based on drawer state
                        }}
                    >
                        <MainAppPage/>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
