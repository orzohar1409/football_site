// src/App.js
import React from 'react';
import {Box} from '@mui/material';

import SideDrawer from './SideDrawer';
import {Routes, Route, useLocation} from 'react-router-dom';
import {appPages} from "../PagesConfig";
import {common} from "@mui/material/colors";
import {useAppContext} from "../AppContext";

export default function MainContent() {
    const {isDrawerOpen, toggleDrawer} = useAppContext();
    const containerStyles = {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        marginTop: {xs: '56px', sm: '64px'},
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
    };

    const mainContentStyles = {
        flexGrow: 1,
        padding: 1,
        transition: 'margin 0.3s ease',
        marginLeft: isDrawerOpen ? '310px' : '5%',
        marginRight: '5%', // 10% from the right
        marginBottom: '10%', // 10% from the bottom
        width: isDrawerOpen ? `calc(80% - 240px)` : '80%', // Adjust width based on drawer state
    };

    return (
        <Box component="div"
             sx={containerStyles}
        >
            <SideDrawer/>

            {/* Main content area */}
            <Box
                component="main"
                sx={mainContentStyles}
            >
                <Routes>
                    {appPages.map((page, index) => (
                        <Route key={index} path={page.path} element={page.component}/>
                    ))}
                </Routes>
            </Box>
        </Box>
    );
}
