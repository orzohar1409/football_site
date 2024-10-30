// src/components/SideDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, AccountCircle, Dehaze } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import drawerBackground from '../backgrounds/drawerBackground.jpg';

export default function SideDrawer({ isOpen }) {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}
            sx={{
                width: 240,
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
        >
            <List
                sx={{
                    '& .MuiListItem-root': {
                        color: 'white',  // Default text color for all ListItems
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)', // Hover background color
                        },
                        '&.Mui-selected': {
                            backgroundColor: 'transparent', // Remove blue highlight color on selection
                        },
                    },
                }}
            >                <ListItem button component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Your Team Games" />
                </ListItem>
                <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} /> {/* Adds a light divider */}

                <ListItem button component={Link} to="/resume">
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText primary="About me" />
                </ListItem>
            </List>
        </Drawer>
    );
}
