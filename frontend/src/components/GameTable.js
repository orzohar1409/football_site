import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box} from "@mui/material";
import React from "react";


export default function GameTable({ games }) {
    return(
        <TableContainer component={Paper} sx={{ maxHeight: 400, overflowY: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Home Team</TableCell>
                        <TableCell>Away Team</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((game, index) => (
                        <TableRow key={index} sx={{ height: 60 }}> {/* Enlarged row height */}
                            <TableCell>{new Date(game.date).toLocaleDateString()}</TableCell>

                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.home_team.logo}
                                        alt={`${game.home_team.name} logo`}
                                        style={{ width: 20, height: 20, marginRight: 8 }}
                                    />
                                    {game.home_team.name}
                                </Box>
                            </TableCell>

                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={game.away_team.logo}
                                        alt={`${game.away_team.name} logo`}
                                        style={{ width: 20, height: 20, marginRight: 8 }}
                                    />
                                    {game.away_team.name}
                                </Box>
                            </TableCell>

                            <TableCell>{game.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>    )
}