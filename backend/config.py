import json
import os
from enum import Enum

# Load shared configuration from JSON
env = os.getenv('ENVIRONMENT', 'dev')
config_path = os.path.join(os.path.dirname(__file__), f'../{env}.json')
with open(config_path) as config_file:
    shared_config_data = json.load(config_file)


class CacheKey:
    def __init__(self, key, expiration):
        self.key = key
        self.expiration = expiration


DAY_IN_SECONDS = 86400


class CacheKeys(Enum):
    LEAGUES = CacheKey('leagues', 1000 * DAY_IN_SECONDS)
    TEAMS = CacheKey('teams', 1000 * DAY_IN_SECONDS)
    GAMES = CacheKey('games', 1000 * DAY_IN_SECONDS)
    VENUES = CacheKey('venues', 1000 * DAY_IN_SECONDS)
    SQUADS = CacheKey('squads', 1000 * DAY_IN_SECONDS)


class Config:
    def __init__(self, config_data):
        # Load all config data as attributes of this class
        for key, value in config_data.items():
            setattr(self, key, value)

        # Additional computed values
        self.API_BASE_URL = f"{self.APP_HOSTNAME}:{self.API_PORT}"
        self.API_MAIN_ENDPOINT = f"{self.API_BASE_URL}/{self.API_ENDPOINT}"
        self.API_GET_ALL_LEAGUES = f"{self.API_MAIN_ENDPOINT}/{self.API_LEAGUES_ENDPOINT}"
        self.API_GET_ALL_TEAMS = f"{self.API_MAIN_ENDPOINT}/{self.API_TEAMS_ENDPOINT}"

        # Flask configuration
        self.FLASK_DEBUG = True
        self.FLASK_HOST = '0.0.0.0'
        self.FLASK_PORT = int(self.API_PORT)

        # Cache directory configuration
        self.CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cache')

        # Cache keys
        self.CacheKeys = CacheKeys

        # Football API Configuration
        self.FOOTBALL_API_SEASON = "2022"
        self.API_REQUEST_HEADERS = {
            'x-rapidapi-host': "v3.football.api-sports.io",
            'x-rapidapi-key': self.API_KEY
        }

        self.FRONTEND_DOMAIN = f"{self.APP_HOSTNAME}:{self.FRONTEND_PORT}"

        self.FOOTBALL_API_BASE_URL = "https://v3.football.api-sports.io"


# Instantiate the global config object
config = Config(shared_config_data)
