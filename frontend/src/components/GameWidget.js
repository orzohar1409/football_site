// src/ResultsPage.js
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import sharedConfig from "../config"; // Ensure this file exports API_KEY

export default function GameWidget({gameId}) {

    return (
        <div id="wg-api-football-game"
             data-host="v3.football.api-sports.io"
             data-key={sharedConfig.API_KEY}
             data-id={gameId}
             data-theme=""
             data-refresh="15"
             data-show-errors="false"
             data-show-logos="true">
        </div>

);
}