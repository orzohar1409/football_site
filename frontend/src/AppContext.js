import React, { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedLeague, setSelectedLeague] = useState('');
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);
    const [allLeagues, setAllLeagues] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedTeamId, setSelectedTeamId] = useState(null);
    const [allTeamsOfSelectedLeague, setAllTeamsOfSelectedLeague] = useState([]);
    const [games, setGames] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [error, setError] = useState(null);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const value = useMemo(() => ({
        selectedLeague, setSelectedLeague,
        selectedLeagueId, setSelectedLeagueId,
        selectedTeam, setSelectedTeam,
        selectedTeamId, setSelectedTeamId,
        games, setGames,
        isDrawerOpen, setIsDrawerOpen,
        selectedGame, setSelectedGame,
        toggleDrawer,
        allLeagues, setAllLeagues,
        allTeamsOfSelectedLeague, setAllTeamsOfSelectedLeague,
        error, setError
    }), [
        selectedLeague, selectedLeagueId, selectedTeam, selectedTeamId, games,
        isDrawerOpen, selectedGame, allLeagues, allTeamsOfSelectedLeague, error
    ]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}