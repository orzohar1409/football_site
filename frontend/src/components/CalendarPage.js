// src/pages/CalendarPage.js

import React, {useState, useEffect} from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
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
import "./CalendarPage.css"

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
    const [currentView, setCurrentView] = useState('month'); // Manage the current view
    const [currentDate, setCurrentDate] = useState(new Date(2022, 8, 1)); // Manage the current date

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

                title: `vs ${game.home_team.name == team.name ? game.away_team.name : game.home_team.name}`,
                start: new Date(game.date),
                end: new Date(new Date(game.date).getTime() + 2 * 60 * 60 * 1000), // 2 hours later
                teamId: team.id,
                color: team.color, // Assign team color to event
            }));
            setEvents(prevEvents => [...prevEvents, ...teamEvents]);
            if (teamEvents.length > 0) {
                setCurrentDate(teamEvents[0].start); // Focus on the first event's date
                setCurrentView('month'); // Ensure the view is set to "month"
            }
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

    // Handle event selection to navigate to the day view
    const handleSelectEvent = (event) => {
        setCurrentView('day');
        setCurrentDate(event.start);
    };

    // Custom event styling based on team color
    const eventPropGetter = (event) => ({
        style: {
            backgroundColor: event.color,
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: 'bold',
            whiteSpace: "normal"
        },
    });

    return (
        <Box sx={{padding: 1}}>
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end', // Align elements to the bottom
                flexWrap: 'wrap', // Allow wrapping for responsiveness
            }}>
                <Typography variant="h4">
                    Select league and team, then press "ADD TO CALENDAR"
                </Typography>
                <SelectLeagueAndTeam
                    handleLeagueSelect={handleLeagueSelect}
                    handleTeamSelect={() => {}}
                    selectedLeague={selectedLeague}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleTeamSelect} sx={{mb:2}}>
                    Add to calendar
                </Button>
                <Typography variant="body1">
                    * you may choose several teams
                </Typography>
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
                    style={{height: "80vh", marginTop: 20, width: "100%"}}
                    defaultView="month"
                    defaultDate={new Date(2022, 8, 1)}
                    eventPropGetter={eventPropGetter} // Apply color to calendar events
                    view={currentView} // Controlled view
                    date={currentDate} // Controlled date
                    onSelectEvent={handleSelectEvent} // Handle event selection
                    onView={(view) => setCurrentView(view)} // Update view when user manually changes it
                    onNavigate={(date) => setCurrentDate(date)} // Update date when user navigates
                    formats={{
                        weekdayFormat: (date) => format(date, 'EEE'), // Abbreviated day names
                    }}
                />
            )}
        </Box>
    );
}
