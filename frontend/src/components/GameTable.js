import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";

const cellStyles = {
    fontSize: { xs: '0.55rem', sm: '0.8rem' },
    padding: { xs: 0.5, sm: 1 }
};

export default function GameTable({ games }) {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 500, overflowY: 'auto', width: '100%' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={cellStyles}>Date</TableCell>
                        <TableCell sx={cellStyles}>Home Team</TableCell>
                        <TableCell sx={cellStyles}>Away Team</TableCell>
                        <TableCell sx={cellStyles}>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((game, index) => (
                        <TableRow key={index} sx={{ height: { xs: 30, sm: 50 } }}> {/* Smaller row height on mobile */}
                            <TableCell sx={cellStyles}>
                                {new Date(game.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell sx={cellStyles}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.home_team.logo}
                                        alt={`${game.home_team.name} logo`}
                                        style={{
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            marginRight: 2
                                        }}
                                    />
                                    {game.home_team.name}
                                </Box>
                            </TableCell>
                            <TableCell sx={cellStyles}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.away_team.logo}
                                        alt={`${game.away_team.name} logo`}
                                        style={{
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            marginRight: 2
                                        }}
                                    />
                                    {game.away_team.name}
                                </Box>
                            </TableCell>
                            <TableCell sx={cellStyles}>{game.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
