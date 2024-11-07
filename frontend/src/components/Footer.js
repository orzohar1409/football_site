// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <GitHubIcon sx={{ mr: 1 }} />
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
                .
            </Typography>
        </Box>
    );
}

export default Footer;
