// src/components/SideDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { appPages } from '../PagesConfig'; // Import your configuration file
import { useAppContext } from '../AppContext'; // Import your context hook
export default function SideDrawer() {
    const { isDrawerOpen, toggleDrawer } = useAppContext();
    const location = useLocation(); // Get the current location

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
            open={isDrawerOpen}
            sx={drawerStyles}
        >
            <List
                sx={listItemStyles}
            >
                {appPages.map((page, index) => {
                    const isSelected = location.pathname === page.path; // Check if the page is selected
                    return (
                        <React.Fragment key={index}>
                            <ListItem
                                button
                                component={Link}
                                to={page.path}
                                onClick={toggleDrawer}
                                sx={{
                                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'transparent', // Highlight selected page
                                    color: isSelected ? 'yellow' : 'white', // Change text color for selected page
                                }}
                            >
                                <ListItemIcon aria-hidden="true">{page.icon()}</ListItemIcon>
                                <ListItemText primary={page.name}/>
                            </ListItem>
                            {index < appPages.length - 1 && (
                                <Divider sx={{bgcolor: 'rgba(255, 255, 255, 0.2)'}}/>
                            )}
                        </React.Fragment>
                    )
                })}
            </List>
        </Drawer>
    );
}
