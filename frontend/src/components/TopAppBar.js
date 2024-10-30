// src/components/TopAppBar.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
export default function TopAppBar({ onMenuClick }) {
    return (
        <AppBar position="fixed" sx={{ height: 64, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
                    <DehazeOutlinedIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Or Zohar's Football Site
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
