import os
import pickle
import api_utils
from config import config
from teams import get_all_teams_by_league
from cache_manager import load_cache, save_cache


def fetch_and_save_venues_by_country(country):
    """
    Fetch venues by country from the API and save them in a pickle file.
    """
    pickle_filename = f"{country}_venues.pkl"
    if os.path.exists(pickle_filename):
        # If pickle file exists, load data from it
        with open(pickle_filename, "rb") as f:
            venues = pickle.load(f)
        return venues

    # Otherwise, fetch from the API
    url = f"https://v3.football.api-sports.io/venues?search={country}"
    response = api_utils.request_api(url)

    if response.get("response"):
        venues = response["response"]
        # Save to pickle
        with open(pickle_filename, "wb") as f:
            pickle.dump(venues, f)
        return venues
    else:
        return []


def get_venues_by_league_id(league_id):
    """
    Get all venues associated with teams in the specified league,
    appending the country information to each venue.
    """
    # Get all teams for the league
    teams = get_all_teams_by_league(league_id)

    # Collect venues with country info
    league_venues = []
    for team in teams:
        venue = team["venue"]
        venue["country"] = team["country"]# Append country to venue
        venue["team_name"] = team["name"]
        venue["team_logo"] = team["logo"]
        league_venues.append(venue)

    return league_venues