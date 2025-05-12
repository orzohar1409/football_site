import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ProfessionalSummary() {
    return (
        <Box sx={{ maxWidth: '800px', margin: 'auto', padding: { xs: '8px', sm: '16px' } }}>
            {/* Professional Summary Section */}
            <Box sx={{ pl: 2 }}> {/* Adjust padding-left as needed */}
                <Typography variant="body1" paragraph>
                    • 3 Years as Cyber Analyst + Developer at CyberMDX (acquired by Forescout)
                </Typography>
                <Typography variant="body1" paragraph>
                    • 2.5 Years in Big Data Analysis at the Cyber Defense Brigade (formerly part of Unit 8200) – Splunk, Elastic, SQL
                    and MongoDB
                </Typography>
                <Typography variant="body1" paragraph>
                    • Splunk Expert – Queries, Analysis and Data Accessibility
                </Typography>
                <Typography variant="body1" paragraph>
                    • Cyber Analyst and APT Investigator (Threat Intelligence)
                </Typography>
                <Typography variant="body1" paragraph>
                    • Lead Knowledge Source in Cyber Operations and Product Analysis
                </Typography>
            </Box>
        </Box>
    );
}
