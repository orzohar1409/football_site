// frontend/src/config.js

import sharedConfig from './site_config.json';  // Adjust path as needed

// Construct additional computed values
sharedConfig.API_BASE_URL = `${sharedConfig.APP_HOSTNAME}:${sharedConfig.API_PORT}`;
sharedConfig.API_MAIN_ENDPOINT = `${sharedConfig.API_BASE_URL}/${sharedConfig.API_ENDPOINT}`;
sharedConfig.API_GET_ALL_LEAGUES = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_LEAGUES_ENDPOINT}`;
sharedConfig.API_GET_ALL_TEAMS = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_TEAMS_ENDPOINT}`;
sharedConfig.API_GET_ALL_GAMES = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_GAMES_ENDPOINT}`;

// Export the entire object
export default sharedConfig;
