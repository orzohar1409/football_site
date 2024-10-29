// src/components/SideDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
                    marginTop: '64px', // Add top margin to start below the App Bar
                },
            }}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Your Team Games" />
                </ListItem>
                <ListItem button component={Link} to="/resume">
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
            </List>
        </Drawer>
    );
}
