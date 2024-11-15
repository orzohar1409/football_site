import {Box, Divider, IconButton, Link, Slide, Typography} from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LeagueDropdown from "./LeagueDropdown";
import { useNavigate } from "react-router-dom";
import {useAppContext} from "../AppContext"; // Assuming you're using React Router

export default function WelcomePage() {
    const [showDropdown, setShowDropdown] = useState(true);
    const {setIsDrawerOpen} = useAppContext();
    const navigate = useNavigate();

    const handleLeagueSelect = () => {
        setShowDropdown(false); // Hide dropdown upon selection
        setIsDrawerOpen(true); // Open the drawer
        navigate("/results"); // Navigate to the results page
    };
    return (<>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{
                enter: 1000,
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                        marginTop: '64px',
                        position: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to Or Zohar's Football Site!
                    </Typography>
                    <Box
                        component="img"
                        alt="Or Zohar's Football Site Logo"
                        sx={{
                            maxHeight: {xs: 200, md: 200},
                            maxWidth: {xs: 200, md: 250},
                            padding:2,
                        }}
                        src="../../logo.png"
                    />
                    {showDropdown && (
                        <>

                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                Disclaimer: This site is for educational purposes only.<br/>
                                The data is fetched from api-football.com<br/>
                                Due to budget constraints (non existed), the data is per 2022<br/>
                            </Typography>
                            <Typography variant="h6" sx={{ marginTop: 4 }}>
                                Choose your favourite league and get started!<br/>
                            </Typography>
                            <Divider sx={{ bgcolor: 'rgba(204,34,34,0.2)', marginY: 2 }} />
                            <Box sx={{ width:{xs: "50%"}}}>
                            <LeagueDropdown onLeagueSelect={handleLeagueSelect} />
                            </Box>
                        </>
                    )}
                </Box>
            </Slide>
            <Box component="footer" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                position: 'center',
                bottom: 0,
            }}
            >
                <Typography variant="body2" color="text.secondary">
                    Check my project on{' '}
                    <Link
                        href="https://github.com/orzohar1409/football_site"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                    >
                        GitHub
                    </Link>
                    . <GitHubIcon sx={{mr: 1}}/>

                </Typography>
            </Box>
        </>
    );
}
