// src/components/TopAppBar.js
import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Box} from "@mui/material";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import {useAppContext} from "../AppContext";

export default function TopAppBar() {
    const {toggleDrawer, isDrawerOpen} = useAppContext();
    const appBarStyles = {
        height: 64,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(241,24,24)',
    };

    const logoStyles = {
        height: 50,
        display: "flex",
        alignItems: "center",
    };

    return (
        <AppBar position="fixed" sx={appBarStyles}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label={isDrawerOpen ? "close menu" : "open menu"}
                    onClick={toggleDrawer}
                >
                    {isDrawerOpen ? <CloseIcon /> : <DehazeOutlinedIcon />}
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Ballon d'Or Zohar
                </Typography>
                <Box component="img" src={logo} sx={logoStyles}/>
            </Toolbar>
        </AppBar>
    );
}
