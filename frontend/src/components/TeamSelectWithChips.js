// src/components/TeamSelectWithChips.js

import React from 'react';
import { Box, Chip, Avatar } from '@mui/material';

export default function TeamSelectWithChips({ selectedTeams, onRemoveTeam }) {
    return (
        <Box sx={{ mt: 2, mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {selectedTeams.map((team) => (
                <Chip
                    key={team.id}
                    label={team.name}
                    avatar={<Avatar src={team.logo} alt={team.name} />}
                    onDelete={() => onRemoveTeam(team)}
                    sx={{
                        backgroundColor: team.color, // Use the team's assigned color
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                />
            ))}
        </Box>
    );
}
