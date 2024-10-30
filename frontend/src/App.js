// src/App.js
import React, {useState} from 'react';
import {Box} from '@mui/material';
import YourTeamGames from './YourTeamGames';
import ResumePage from './components/ResumePage';
import TopAppBar from './components/TopAppBar';
import SideDrawer from './components/SideDrawer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';

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
                <TopAppBar onMenuClick={toggleDrawer}/>
                <Box sx={{display: 'flex', marginTop: '64px'}}> {/* Adjust main content position */}
                    <SideDrawer isOpen={isDrawerOpen}/>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            width: `calc(100% - ${isDrawerOpen ? 240 : 0}px)`,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<YourTeamGames/>}/>
                            <Route path="/resume" element={<ResumePage/>}/>
                        </Routes>
                    </Box>
                </Box>
            </Router></ThemeProvider>
    );
}

export default App;
