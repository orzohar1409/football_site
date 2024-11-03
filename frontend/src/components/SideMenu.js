// src/components/SideDrawer.js
import React from 'react';
import { SwipeableDrawer,Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, AccountCircle, Dehaze } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import drawerBackground from '../backgrounds/drawerBackground.jpg';

export default function SideMenu({ isOpen }) {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}

            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    marginTop: '64px', // Start below the App Bar
                    backgroundImage: `url(${drawerBackground})`, // Set the background image
                    backgroundSize: 'cover', // Make the background cover the drawer area
                    backgroundPosition: 'center', // Center the background image
                    color: 'white', // Adjust text color if needed for contrast
                },
            }}
        />
    );
}
