// src/pages/CalendarPage.js

import React, {useState, useEffect} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Box, Typography, CircularProgress} from '@mui/material';
import SelectLeagueAndTeam from '../components/LeagueTeamSelect';
import TeamSelectWithChips from '../components/TeamSelectWithChips';
import axios from 'axios';
import config from "../config";
import {useAppContext} from "../AppContext";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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

// Define a set of 10 colors for team chips and events
const colors = [
    '#1976d2', '#388e3c', '#d32f2f', '#fbc02d', '#7b1fa2',
    '#ff9800', '#009688', '#c2185b', '#9c27b0', '#3f51b5'
];

const getGamesUrl = (leagueId, teamId) => `${config.API_GET_ALL_GAMES}/${leagueId}/${teamId}`;

export default function CalendarPage() {
    const {selectedLeague, selectedTeam} = useAppContext();
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [colorIndex, setColorIndex] = useState(0); // Track current color index for circular assignment

    // Handle team selection and assign a color from the predefined list in a circular manner
    const handleTeamSelect = () => {
        if (selectedTeam && !selectedTeams.some(team => team.id === selectedTeam.id)) {
            const teamWithColor = {
                ...selectedTeam,
                color: colors[colorIndex], // Assign color based on current index
            };
            setSelectedTeams([...selectedTeams, teamWithColor]);

            // Update colorIndex for the next team in a circular manner
            setColorIndex((colorIndex + 1) % colors.length);

            // Fetch games for the selected team
            fetchGames(teamWithColor);
        }
    };

    // Fetch games for each team and assign color to each event
    const fetchGames = async (team) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(getGamesUrl(selectedLeague.id, team.id));
            const gamesData = response.data;

            const teamEvents = gamesData.map(game => ({
                title: `${game.home_team.name} vs ${game.away_team.name}`,
                start: new Date(game.date),
                end: new Date(game.date),
                teamId: team.id,
                color: team.color, // Assign team color to event
            }));

            setEvents(prevEvents => [...prevEvents, ...teamEvents]);
        } catch (error) {
            console.error('Error fetching games:', error);
            setError('Failed to fetch game data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Handle removing a team and associated events
    const handleRemoveTeam = (teamToRemove) => {
        setSelectedTeams(selectedTeams.filter(team => team.id !== teamToRemove.id));
        setEvents(events.filter(event => event.teamId !== teamToRemove.id));
    };
    const handleLeagueSelect = () => {
        // No action needed; preserve selected teams and events
    };
    // Custom event styling based on team color
    const eventPropGetter = (event) => ({
        style: {
            backgroundColor: event.color,
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: 'bold',
        },
    });

    return (
        <Box sx={{padding: 3}}>
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
            }}>
                <SelectLeagueAndTeam
                    handleLeagueSelect={handleLeagueSelect}
                    handleTeamSelect={() => {}}
                    selectedLeague={selectedLeague}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleTeamSelect} sx={{mb:2}}>
                    Add
                </Button>
            </Box>
            {/* Display selected teams as chips */}
            <TeamSelectWithChips
                selectedTeams={selectedTeams}
                onRemoveTeam={handleRemoveTeam}
            />

            {error && <Typography color="error" variant="body2">{error}</Typography>}

            {loading && <CircularProgress/>}

            {/* Calendar with events and custom styling */}
            {!loading && (
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 500, marginTop: 20}}
                    defaultView="month"
                    defaultDate={new Date(2022, 8, 1)}
                    eventPropGetter={eventPropGetter} // Apply color to calendar events
                />
            )}
        </Box>
    );
}
