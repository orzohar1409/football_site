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
                        src="../../orz-photo.png"
                        sx={{ width: 100, height: 100, mr: 2 }}
                    />
                    <Box>
                        <Typography variant="h4">Or Zohar</Typography>
                        <Typography variant="subtitle1">Software Developer</Typography>
                    </Box>
                </Box>

                {/* Contact Section */}
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <a href="mailto:orzohar66@gmail.com"><Email fontSize="large" /></a>
                    <a href="https://www.linkedin.com/in/or-zohar-7403a5188/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" /></a>
                    <a href="https://github.com/orzohar1409/football_site" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" /></a>
                    <Link href="../../cv.pdf" download sx={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
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
                                    src="../../cmdx-logo.png"
                                    alt="CyberMDX Logo"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Grid>
                            <Grid item xs>
                                <ListItemText
                                    primary={<Typography variant="h6">Cyber Analyst & Software Developer</Typography>}
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
                                    src="../../Hativat_Hahagana_of_Computer_Service_Directorate.png"
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
                                    src="../../triplep-logo.png"
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
                                    • Trained students in cybersecurity concepts and practices
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
                                <Box
                                    component="img"
                                    src="../../technion-logo.png"
                                    alt="Technion Logo"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Grid>
                            <Grid item xs>
                                <ListItemText primary="Computer Science, Technion - GPA 81.3" secondary="Completed 3rd Year" sx={{ mb: 1 }} />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="body2">
                                    • Intro to System Programming – 92 <br />
                                    • Computer Organization and Programming – 88 <br />
                                    • Digital Systems and Computer Structure – 89 <br />
                                    • Network Defence – 89 <br />
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
                        <ListItemText primary="Software Developer" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Code /></ListItemIcon>
                        <ListItemText primary="Programming Languages: C, C++, Python, React JS" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Code /></ListItemIcon>
                        <ListItemText primary="Cyber Analysis & Threat Intelligence" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Code /></ListItemIcon>
                        <ListItemText primary="Big Data Tools: Splunk, Elastic, SQL, MongoDB" />
                    </ListItem>
                </List>

                {/* Footer */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="caption">Or Zohar - 2025</Typography>
                </Box>
            </Box></Slide>
    );
}
