// src/App.js
import React, {useEffect} from 'react';
import {Box, Typography} from '@mui/material';

import SideDrawer from './SideDrawer';
import {Routes, Route, useLocation} from 'react-router-dom';
import {appPages} from "../PagesConfig";
import {common} from "@mui/material/colors";
import {useAppContext} from "../AppContext";

export default function MainContent() {
    const {isDrawerOpen, toggleDrawer} = useAppContext();
    const location = useLocation();

    const containerStyles = {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        marginTop: {xs: '56px', sm: '64px'},
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        padding:1
    };

    const mainContentStyles = {
        flexGrow: 1,
        transition: 'margin 0.3s ease',
        marginLeft: isDrawerOpen ? '310px' : '5%',
        marginRight: '5%', // 10% from the right
        marginBottom: '10%', // 10% from the bottom
        width: isDrawerOpen ? `calc(80% - 240px)` : '95%', // Adjust width based on drawer state
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.zoom = "80%"; // Ensures zoom level is set to 100%
    }, [location.pathname]);
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
