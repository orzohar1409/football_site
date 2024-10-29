import React from 'react';
import { Box, Avatar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
import { Email, LinkedIn, GitHub, Work, School, Code } from '@mui/icons-material';

export default function ResumePage() {
    return (
        <Box
            sx={{
                maxWidth: '800px',
                margin: 'auto',
                padding: { xs: '8px', sm: '16px' }, // Adjust padding for small screens
                textAlign: 'left'
            }}
        >            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                    alt="Or Zohar"
                    src="/path-to-your-profile-picture.jpg"  // Add profile picture here
                    sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Box>
                    <Typography variant="h4">Or Zohar</Typography>
                    <Typography variant="subtitle1">Cyber Analyst & Big Data Expert</Typography>
                </Box>
            </Box>

            {/* Contact Section */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <a href="mailto:orzohar66@gmail.com"><Email fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" /></a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" /></a>
            </Box>

            {/* Professional Summary Section */}
            <Typography variant="h5" gutterBottom>Professional Summary</Typography>
            <Typography variant="body1" paragraph>
                • 3 Years as Cyber Analyst at CyberMDX (acquired by Forescout) <br/>
                • 2.5 Years in Big Data Analysis at Cyber Defense Brigade (Unit 8200) – Splunk, Elastic, SQL, MongoDB <br/>
                • Expert in Cyber Operations, Threat Intelligence, and Data Analysis
            </Typography>
            <Divider sx={{ my: 2 }} />

            {/* Experience Section */}
            <Typography variant="h5" gutterBottom>Experience</Typography>
            <List>
                <ListItem>
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText primary="Cyber Analyst" secondary="CyberMDX (2019 - 2022)" />
                    <Typography variant="body2">
                        • Led Data Lake project using AWS Glue and PySpark <br />
                        • Medical Device Communication Investigator <br />
                        • Responsible for team training and onboarding
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText primary="Splunk Expert & Cyber Analyst" secondary="Cyber Defense Brigade, Unit 8200 (2017 - 2019)" />
                    <Typography variant="body2">
                        • Lead Investigator in Cyber Operations <br />
                        • Developed dashboards for data insights and analysis
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText primary="Cyber Instructor" secondary="TripleP Inc. (2023)" />
                    <Typography variant="body2">
                        • Trained high school students in cybersecurity concepts and practices
                    </Typography>
                </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />

            {/* Education Section */}
            <Typography variant="h5" gutterBottom>Education</Typography>
            <List>
                <ListItem>
                    <ListItemIcon><School /></ListItemIcon>
                    <ListItemText primary="Computer Science, Technion" secondary="Completed 2nd Year" />
                    <Typography variant="body2">
                        • Intro to System Programming – 92 <br />
                        • Computer Organization and Programming – 88 <br />
                        • Psychometric Score – 752
                    </Typography>
                </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />

            {/* Skills Section */}
            <Typography variant="h5" gutterBottom>Skills</Typography>
            <List>
                <ListItem>
                    <ListItemIcon><Code /></ListItemIcon>
                    <ListItemText primary="Cyber Analysis & Threat Intelligence" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><Code /></ListItemIcon>
                    <ListItemText primary="Big Data Tools: Splunk, Elastic, SQL, MongoDB" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><Code /></ListItemIcon>
                    <ListItemText primary="Programming Languages: C, C++, Python" />
                </ListItem>
            </List>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="caption">Or Zohar - 2024</Typography>
            </Box>
        </Box>
    );
}
