import json
import api_utils
from config import config
from cache_manager import load_cache, save_cache


def get_squad_by_team_id(team_id):
    """Fetch teams data from cache or API."""
    data = load_cache(cache_key=config.CacheKeys.SQUADS, item_id=str(team_id))
    if data:
        return data
    # Otherwise, fetch from API and save to cache
    data = fetch_squad_from_api(team_id)  # Placeholder for actual API fetch
    save_cache(cache_key=config.CacheKeys.SQUADS, data=data, item_id=str(team_id))
    return data


def filter_squad_data(data):
    """Extract and return only the relevant team information from the API response."""
    # Check if 'response' key exists and is a list
    players = []
    if "response" in data and isinstance(data["response"], list):
        for item in data["response"]:
            team_data = item.get("players", [])
            for player in team_data:
                players.append({
                    "id": player["id"],
                    "name": player["name"],
                    "age": player["age"],
                    "number": player["number"],
                    "position": player["position"],
                    "photo": player["photo"]
                })
        return players
    return []

def fetch_squad_from_api(team_id):
    url = f"{config.FOOTBALL_API_BASE_URL}/players/squads?team={team_id}"
    return filter_squad_data(api_utils.request_api(url))