// src/App.js
import React from 'react';
import {Box} from '@mui/material';

import SideDrawer from './SideDrawer';
import {Routes, Route, useLocation} from 'react-router-dom';
import {appPages} from "../PagesConfig";

export default function MainContent({isDrawerOpen, toggleDrawer}) {

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
        transition: 'margin-left 0.3s ease',
        marginLeft: isDrawerOpen ? '240px' : '0',
        width: isDrawerOpen ? `calc(100% - 240px)` : '100%',
    };
    return (
        <Box component="div"
             sx={containerStyles}
        >
            <SideDrawer isOpen={isDrawerOpen} onClick={toggleDrawer}/>

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
