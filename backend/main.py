from flask import Flask
from flask import request
from flask_cors import cross_origin
from config import *  # Ensure config is fully imported as an object of Config class
from leagues import get_all_leagues
from teams import get_all_teams_by_league
from games import get_all_games_by_league_and_team
from venues import get_venues_by_league_id
from squads import get_squad_by_team_id
app = Flask(__name__)

# Enable CORS globally for your specific React origin

HOST = config.FLASK_HOST
PORT = config.FLASK_PORT
print(PORT)

@app.route(f'/api/{config.API_LEAGUES_ENDPOINT}')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_leagues():
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Request from {client_ip}")
    return get_all_leagues()

@app.route(f'/api/{config.API_TEAMS_ENDPOINT}/<int:league_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_teams(league_id):
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Request from {client_ip}")
    return get_all_teams_by_league(league_id)

@app.route(f'/api/{config.API_GAMES_ENDPOINT}/<int:league_id>/<int:team_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_games(league_id, team_id):
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Request from {client_ip}")
    return get_all_games_by_league_and_team(league_id, team_id)

@app.route(f'/api/{config.API_VENUES_ENDPOINT}/<int:league_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_venues(league_id):
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Request from {client_ip}")
    return get_venues_by_league_id(league_id)

@app.route(f'/api/{config.API_SQUADS_ENDPOINT}/<int:team_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_squads(team_id):
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Request from {client_ip}")
    return get_squad_by_team_id(team_id)


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5003))  # Fallback to 5003 if PORT not set
    app.run(host="0.0.0.0", port=port)