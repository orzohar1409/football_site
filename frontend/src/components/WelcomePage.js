import {Box, IconButton, Link, Slide, Typography} from "@mui/material";
import React from "react";
import StartIcon from '@mui/icons-material/Start';
import {Email, SpaceBar} from "@mui/icons-material";
import Footer from "./Footer";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function WelcomePage({onStartClick}) {
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
                        height: '80vh',
                        padding: 0,
                        textAlign: 'center',
                    }}
                >
                    {/* Replace 'logo.png' with the path to your logo image */}

                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to Or Zohar's Football Site!
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: {xs: 233, md: 200},
                            maxWidth: {xs: 350, md: 250},
                        }}
                        src="../../logo.png"
                    />

                </Box>
            </Slide>
            <Box component="footer" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                position: 'fixed',
                bottom: 0,
                width: '80%',
            }}
            >
                <Typography variant="body2" color="textSecondary">
                    Check my project on{' '}
                    <Link
                        href="https://github.com/your-github-username"
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
