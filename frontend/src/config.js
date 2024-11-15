// frontend/src/config.js

const environment = process.env.REACT_APP_ENVIRONMENT || 'dev';
console.log(`Loading configuration for environment: ${environment}`);
// Import the correct configuration file based on environment
let sharedConfig;
try {
    if (environment === 'prod') {
        sharedConfig = require('./prod.json'); // Production config
        sharedConfig.API_KEY = process.env.REACT_APP_API_KEY;
    } else {
        sharedConfig = require('./dev.json');// Development config
    }
} catch (error) {
    console.error(`Failed to load configuration for environment: ${environment}`, error);
    sharedConfig = {}; // Fallback to an empty config if there's an error
}

// Construct additional computed values based on loaded config
sharedConfig.API_BASE_URL = `${sharedConfig.APP_HOSTNAME}:${sharedConfig.API_PORT}`;
sharedConfig.API_MAIN_ENDPOINT = `${sharedConfig.API_BASE_URL}/${sharedConfig.API_ENDPOINT}`;
sharedConfig.API_GET_ALL_LEAGUES = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_LEAGUES_ENDPOINT}`;
sharedConfig.API_GET_ALL_TEAMS = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_TEAMS_ENDPOINT}`;
sharedConfig.API_GET_ALL_GAMES = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_GAMES_ENDPOINT}`;
sharedConfig.API_GET_VENUES = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_VENUES_ENDPOINT}`;
sharedConfig.API_GET_SQUADS = `${sharedConfig.API_MAIN_ENDPOINT}/${sharedConfig.API_SQUADS_ENDPOINT}`;
// Export the entire configuration object
export default sharedConfig;
