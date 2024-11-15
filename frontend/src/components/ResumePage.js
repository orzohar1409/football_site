import React from 'react';
import {
    Box,
    Avatar,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    Link,
    Slide
} from '@mui/material';
import { Email, LinkedIn, GitHub, Code } from '@mui/icons-material';
import ProfessionalSummary from "./ProfessionalSummary";
import DownloadIcon from '@mui/icons-material/Download';
export default function ResumePage() {
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{
            enter : 1000,
        }}>
        <Box
            sx={{

                maxWidth: '800px',
                margin: 'auto',
                padding: { xs: '8px', sm: '16px' },
                textAlign: 'left'
            }}
        >
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                    alt="Or Zohar"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH-S8ceA-_xig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708686253065?e=1735776000&v=beta&t=kEVbfm-uaC-lyULTiLpTWoe7mqeV8ErwksLR7r6J1uQ"
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
                <a href="https://www.linkedin.com/in/or-zohar-7403a5188/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" /></a>
                <a href="https://github.com/orzohar1409/football_site" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" /></a>
                <Link href="https://www.dropbox.com/scl/fi/mqfc4wigl0i0g2i5bci4s/Or-Zohar-CV-2024.pdf?rlkey=wc2aeft742fithlxwdi78s3zn&st=zczg2ws1&dl=1" download sx={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                    <DownloadIcon />
                    <Typography variant="body2" sx={{ ml: 1 }}>Download CV</Typography>
                </Link>
            </Box>

            {/* Professional Summary Section */}
            <Typography variant="h5" gutterBottom>Professional Summary</Typography>
            <ProfessionalSummary/>
            <Divider sx={{ my: 2 }} />

            {/* Experience Section */}
            <Typography variant="h5" gutterBottom>Experience</Typography>
            <List>
                <ListItem>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item sx={{ width: 60, height: 60 }}>
                            <img
                                src="https://store-images.s-microsoft.com/image/apps.59972.e8ca0f86-abd6-4863-9b80-058be7db02f0.6fc0e3fa-984f-4fff-b7d0-afef33156f69.c2ac9108-d8ec-48cc-aa1e-cd3892f1b59b"
                                alt="CyberMDX Logo"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Grid>
                        <Grid item xs>
                            <ListItemText
                                primary={<Typography variant="h6">Cyber Analyst</Typography>}
                                secondary="CyberMDX (2019 - 2022)"
                                sx={{ mb: 1 }}  // Adds spacing between job title and bullet points
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="body2">
                                • Led Data Lake project using AWS Glue and PySpark <br />
                                • Medical Device Communication Investigator <br />
                                • Responsible for team training and onboarding
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>

                <ListItem>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item sx={{ width: 60, height: 60 }}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hativat_Hahagana_of_Computer_Service_Directorate.svg/1920px-Hativat_Hahagana_of_Computer_Service_Directorate.svg.png"
                                alt="Unit 8200 Logo"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Grid>
                        <Grid item xs>
                            <ListItemText
                                primary={<Typography variant="h6">Splunk Expert & Cyber Analyst</Typography>}
                                secondary="Cyber Defense Brigade, Unit 8200 (2017 - 2019)"
                                sx={{ mb: 1 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="body2">
                                • Lead Investigator in Cyber Operations <br />
                                • Developed dashboards for data insights and analysis
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>

                <ListItem>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item sx={{ width: 60, height: 60 }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShL3ihPkEeX5csqia_6pAOpBkxD7sPKYKD2Tw11D5HH8Z-M-NS19P3LpbT-ew99SERuM4&usqp=CAU"
                                alt="TripleP Inc. Logo"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Grid>
                        <Grid item xs>
                            <ListItemText
                                primary={<Typography variant="h6">Cyber Instructor</Typography>}
                                secondary="TripleP Inc. (2023)"
                                sx={{ mb: 1 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="body2">
                                • Trained high school students in cybersecurity concepts and practices
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />

            {/* Education Section */}
            <Typography variant="h5" gutterBottom>Education</Typography>
            <List>
                <ListItem>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item sx={{ width: 60, height: 60 }}>
                            <img
                                src="data:image/png;base64,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"
                                alt="Technion Logo"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Grid>
                        <Grid item xs>
                            <ListItemText primary="Computer Science, Technion" secondary="Completed 2nd Year" sx={{ mb: 1 }} />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="body2">
                                • Intro to System Programming – 92 <br />
                                • Computer Organization and Programming – 88 <br />
                                • Digital Systems and Computer Structure – 89 <br />
                                • Psychometric Score – 752
                            </Typography>
                        </Grid>
                    </Grid>
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
        </Box></Slide>
    );
}
