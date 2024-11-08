// src/components/SideDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { appPages } from '../PagesConfig'; // Import your configuration file

export default function SideDrawer({ isOpen, onPageClick }) {
    const drawerStyles = {
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: '64px', // Start below the App Bar
            backgroundColor: 'rgba(73,50,54,0.7)', // Semi-transparent background
            backgroundSize: 'cover', // Make the background cover the drawer area
            backgroundPosition: 'center', // Center the background image
            color: 'white', // Adjust text color if needed for contrast
        },
    };

    const listItemStyles = {
        '& .MuiListItem-root': {
            color: 'white',  // Default text color for all ListItems
                '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)', // Hover background color
            },
            '&.Mui-selected': {
                backgroundColor: 'transparent', // Remove blue highlight color on selection
            },
        },
    };

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}
            sx={drawerStyles}
        >
            <List
                sx={listItemStyles}
            >
                {appPages.map((page, index) => (
                    <React.Fragment key={index}>
                        <ListItem button component={Link} to={page.path} onClick={onPageClick}>
                            <ListItemIcon aria-hidden="true">{page.icon()}</ListItemIcon>
                            <ListItemText primary={page.name} />
                        </ListItem>
                        {index < appPages.length - 1 && (
                            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
}
