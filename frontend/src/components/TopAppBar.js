// src/components/TopAppBar.js
import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Box} from "@mui/material";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {Image} from "@mui/icons-material";

export default function TopAppBar({onMenuClick, isDrawerOpen}) {
    return (
        <AppBar position="fixed" sx={{
            height: 64,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'rgb(241,24,24)', // or another color
            backgroundPosition: 'center',
        }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
                    {isDrawerOpen ? <CloseIcon/> : <DehazeOutlinedIcon/>}
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Ballon d'Or Zohar
                </Typography>
                <Box component="img" src="../../logo.png" sx={{height:64,
                    justifyContent: "flex-end",
                }}/>
            </Toolbar>
        </AppBar>
    );
}
