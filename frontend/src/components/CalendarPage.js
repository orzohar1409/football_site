// src/pages/CalendarPage.js

import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Typography, CircularProgress } from '@mui/material';
import SelectLeagueAndTeam from '../components/LeagueTeamSelect';
import axios from 'axios';
import config from "../config";
import { useAppContext } from "../AppContext";

const locales = {
    'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Function to construct the games URL
const getGamesUrl = (leagueId, teamId) => `${config.API_GET_ALL_GAMES}/${leagueId}/${teamId}`;

export default function CalendarPage() {
    const { selectedLeague, selectedTeam } = useAppContext();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLeagueSelect = () => {
        setEvents([]);
    };

    const handleTeamSelect = () => {
        if (selectedTeam) {
            fetchGames();
        }
    };

    // Fetch games when a team is selected
    const fetchGames = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(getGamesUrl(selectedLeague.id, selectedTeam.id));
            const gamesData = response.data;

            // Transform the games data into events format for the calendar
            const transformedEvents = gamesData.map(game => ({
                title: `${game.home_team.name} vs ${game.away_team.name}`,
                start: new Date(game.date),
                end: new Date(game.date),
            }));

            setEvents(transformedEvents);
        } catch (error) {
            console.error('Error fetching games:', error);
            setError('Failed to fetch game data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedTeam) {
            fetchGames();
        }
    }, [selectedTeam]);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Calendar Page
            </Typography>

            {/* League and Team Selection */}
            <SelectLeagueAndTeam
                handleLeagueSelect={handleLeagueSelect}
                handleTeamSelect={handleTeamSelect}
                selectedLeague={selectedLeague}
            />

            {/* Error Message */}
            {error && <Typography color="error" variant="body2">{error}</Typography>}

            {/* Loading Spinner */}
            {loading && <CircularProgress />}

            {/* Calendar */}
            {!loading && (
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, marginTop: 20 }}
                    defaultView="month"
                    defaultDate={new Date(2022, 8, 1)} // Set to September 1, 2022 (month is 0-based)
                />
            )}
        </Box>
    );
}
