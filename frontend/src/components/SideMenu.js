// src/components/SideDrawer.js
import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Dehaze } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import drawerBackground from '../backgrounds/drawerBackground.jpg';
import {appPages} from '../AppConfig';
import app from "../App";
export default function SideMenu({ isOpen }) {


    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}

            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: { xs: "50%", sm: "30%", md: "20%", lg: "15%" }, // Set the width of the drawer
                    boxSizing: 'border-box',
                    marginTop: '64px', // Start below the App Bar
                    backgroundImage: `url(${drawerBackground})`, // Set the background image
                    backgroundSize: 'cover', // Make the background cover the drawer area
                    backgroundPosition: 'center', // Center the background image
                    color: 'white', // Adjust text color if needed for contrast
                },
            }}
        ><List>
                {appPages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                        <ListItemButton component={Link} to={page.path}>
                            <ListItemIcon hidden>
                                {page.icon()} {/* Call icon as a function */}
                            </ListItemIcon>
                            <ListItemText primary={page.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    );
}
