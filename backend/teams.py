import json
import api_utils
from config import config
from cache_manager import load_cache, save_cache


def get_all_teams_by_league(league_id):
    """Fetch teams data from cache or API."""
    data = load_cache(cache_key=config.CacheKeys.TEAMS, item_id=str(league_id))
    if data:
        return data
    # Otherwise, fetch from API and save to cache
    data = fetch_teams_from_api(league_id)  # Placeholder for actual API fetch
    save_cache(cache_key=config.CacheKeys.TEAMS, data=data, item_id=str(league_id))
    return data


def filter_team_data(data):
    """Extract and return only the relevant team information from the API response."""
    # Check if 'response' key exists and is a list
    if 'response' in data and isinstance(data['response'], list):
        filtered_teams = []
        for item in data['response']:
            team = item.get('team')
            venue = item.get('venue')
            if team:
                filtered_teams.append({
                    "id": team["id"],
                    "name": team["name"],
                    "code": team["code"],
                    "country": team["country"],
                    "founded": team["founded"],
                    "national": team["national"],
                    "logo": team["logo"],
                    "venue": venue
                })
        return filtered_teams
    return []


def fetch_teams_from_api(league_id):
    url = f"{config.FOOTBALL_API_BASE_URL}/teams?league={league_id}&season={config.FOOTBALL_API_SEASON}"
    return filter_team_data(api_utils.request_api(url))
