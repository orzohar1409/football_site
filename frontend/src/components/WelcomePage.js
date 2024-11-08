import {Box, IconButton, Link, Slide, Typography} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function WelcomePage() {
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
