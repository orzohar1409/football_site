import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";
import React from "react";

export default function GameTable({ games }) {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 250, overflowY: 'auto', width: '100%' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>Date</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>Home Team</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>Away Team</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((game, index) => (
                        <TableRow key={index} sx={{ height: { xs: 30, sm: 50 } }}> {/* Smaller row height on mobile */}
                            <TableCell sx={{ fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>
                                {new Date(game.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell sx={{ fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.home_team.logo}
                                        alt={`${game.home_team.name} logo`}
                                        style={{
                                            width: '0.75rem',  // Even smaller for mobile
                                            height: '0.75rem',
                                            marginRight: 2
                                        }}
                                    />
                                    {game.home_team.name}
                                </Box>
                            </TableCell>
                            <TableCell sx={{ fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.away_team.logo}
                                        alt={`${game.away_team.name} logo`}
                                        style={{
                                            width: '0.75rem',  // Even smaller for mobile
                                            height: '0.75rem',
                                            marginRight: 2
                                        }}
                                    />
                                    {game.away_team.name}
                                </Box>
                            </TableCell>
                            <TableCell sx={{ fontSize: { xs: '0.55rem', sm: '0.8rem' }, padding: { xs: 0.5, sm: 1 } }}>{game.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
