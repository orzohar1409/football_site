import config
from cache_manager import load_cache, save_cache
from config import CacheKeys

from cache_manager import load_cache, save_cache
from config import config
import http.client
import json
import api_utils


def get_all_leagues():
    """Fetch leagues data from cache or API."""
    data = load_cache(CacheKeys.LEAGUES, item_id="all")
    if data:
        return data
    # Otherwise, fetch from API and save to cache
    data = fetch_leagues_from_api()  # Placeholder for actual API fetch
    save_cache(CacheKeys.LEAGUES, data, item_id="all")
    return data


def filter_leagues(data):
    """Filter out only leagues of type 'League' and keep necessary league information."""
    filtered_leagues = []

    # Check if 'response' key is in data and is a list
    if 'response' in data and isinstance(data['response'], list):
        for item in data['response']:
            league = item.get('league')
            country = item.get('country')
            if league and league.get('type') == 'League':
                filtered_leagues.append({
                    "id": league["id"],
                    "name": league["name"],
                    "type": league["type"],
                    "logo": league["logo"],
                    "country": country["name"]
                })

    return filtered_leagues


def fetch_leagues_from_api():
    url = f"{config.FOOTBALL_API_BASE_URL}/leagues"
    return filter_leagues(api_utils.request_api(url))
