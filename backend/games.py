import api_utils
from config import config
from cache_manager import load_cache, save_cache


def get_all_games_by_league_and_team(league_id, team_id):
    data = load_cache(cache_key=config.CacheKeys.GAMES, item_id=str(league_id) + "_" + str(team_id))
    if data:
        return data
    # Otherwise, fetch from API and save to cache
    data = fetch_games_from_api(league_id, team_id)  # Placeholder for actual API fetch
    save_cache(cache_key=config.CacheKeys.GAMES, data=data, item_id=str(league_id) + "_" + str(team_id))
    return data


def parse_game_data(data):
    games = []
    for match in data.get("response", []):
        fixture = match["fixture"]
        teams = match["teams"]
        goals = match["goals"]

        game = {
            "id": fixture["id"],
            "date": fixture["date"],
            "home_team": {
                "name": teams["home"]["name"],
                "logo": teams["home"]["logo"]
            },
            "away_team": {
                "name": teams["away"]["name"],
                "logo": teams["away"]["logo"]
            },
            "result": f"{goals['home']} - {goals['away']}"
        }
        games.append(game)
    return games


def fetch_games_from_api(league_id, team_id):
    url = f"{config.FOOTBALL_API_BASE_URL}/fixtures?league={league_id}&team={team_id}&season={config.FOOTBALL_API_SEASON}"
    return parse_game_data(api_utils.request_api(url))
