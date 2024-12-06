import requests
from config import config
import json
url = "https://v3.football.api-sports.io/venues?search=England"

payload={}
headers = config.API_REQUEST_HEADERS

response = requests.request("GET", url, headers=headers, data=payload)


def filter_leagues(data):
    """Filter out only leagues of type 'League' and keep necessary league information."""
    filtered_leagues = []

    # Check if 'response' key is in data and is a list
    if 'response' in data and isinstance(data['response'], list):
        for item in data['response']:
            league = item.get('league')
            if league and league.get('type') == 'League':
                filtered_leagues.append({
                    "id": league["id"],
                    "name": league["name"],
                    "type": league["type"],
                    "logo": league["logo"]
                })

    return filtered_leagues
