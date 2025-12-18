import React, { useEffect, useState } from 'react';
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
import config from "../config"; // או הנתיב שבו אתה משתמש

export default function IoTPage() {

    // =======================
    // STATE
    // =======================
    const [waterLevel, setWaterLevel] = useState(null);
    const [totalDrank, setTotalDrank] = useState(null);
    const [error, setError] = useState(false);

    const BACKEND_URL =
        `${config.APP_HOSTNAME}/${config.API_ENDPOINT}/${config.API_BOTTLE_ENDPOINT}/data`;

    // =======================
    // FETCH DATA
    // =======================
    useEffect(() => {
        const fetchBottleData = () => {
            fetch(BACKEND_URL)
                .then(res => res.json())
                .then(data => {
                    setWaterLevel(data.water_level_percent);
                    setTotalDrank(data.total_drank_ml);
                    setError(false);
                })
                .catch(err => {
                    console.error("Bottle fetch failed", err);
                    setError(true);
                });
        };

        fetchBottleData(); // initial
        const interval = setInterval(fetchBottleData, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{ enter: 1000 }}>
            <Box sx={{ maxWidth: '800px', margin: 'auto', padding: { xs: '8px', sm: '16px' } }}>



                {/* IoT Live Section */}
                <Typography variant="h5" gutterBottom>
                    IoT Smart Bottle (Live)
                </Typography>

                <Box
                    sx={{
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        padding: 2,
                        mb: 3,
                        backgroundColor: '#fafafa'
                    }}
                >
                    {error ? (
                        <Typography color="error">
                            Unable to connect to bottle backend
                        </Typography>
                    ) : (
                        <>
                            <Typography>
                                <strong>Current Water Level:</strong>{" "}
                                {waterLevel !== null ? `${waterLevel}%` : "Loading..."}
                            </Typography>

                            <Typography sx={{ mt: 1 }}>
                                <strong>Total Drank:</strong>{" "}
                                {totalDrank !== null ? `${totalDrank} ml` : "Loading..."}
                            </Typography>
                        </>
                    )}
                </Box>



            </Box>
        </Slide>
    );
}
