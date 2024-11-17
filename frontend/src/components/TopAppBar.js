import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import { appPages } from "../PagesConfig";

export default function TopAppBar() {
    const { toggleDrawer, isDrawerOpen } = useAppContext();
    const location = useLocation();

    const appBarStyles = {
        height: 64,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(241,24,24)',
    };

    const logoStyles = {
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    // Find the page object matching the current path
    const currentPage = appPages.find(page => page.path.toLowerCase() === location.pathname.toLowerCase());
    let currentTitle = currentPage ? currentPage.name : "Page Not Found";
    if (currentTitle === "Calendar") {
        currentTitle = "Calendar - rotate for better view!";
    }

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
                        Ballon d'Or - {currentTitle}
                    </Typography>

                    <Box component="img" src={logo} sx={logoStyles}/>

            </Toolbar>
        </AppBar>
    );
}
