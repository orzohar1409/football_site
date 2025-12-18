from flask import Flask
from flask import request
from flask_cors import cross_origin
from config import *  # Ensure config is fully imported as an object of Config class
from leagues import get_all_leagues
from teams import get_all_teams_by_league
from games import get_all_games_by_league_and_team
from venues import get_venues_by_league_id
from squads import get_squad_by_team_id
from bottle import handle_bottle_post, handle_bottle_get
app = Flask(__name__)

# Enable CORS globally for your specific React origin

HOST = config.FLASK_HOST
PORT = config.FLASK_PORT
print(PORT)

@app.route(f'/api/{config.API_LEAGUES_ENDPOINT}')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_leagues():
    return get_all_leagues()

@app.route(f'/api/{config.API_TEAMS_ENDPOINT}/<int:league_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_teams(league_id):
    return get_all_teams_by_league(league_id)

@app.route(f'/api/{config.API_GAMES_ENDPOINT}/<int:league_id>/<int:team_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_games(league_id, team_id):
    return get_all_games_by_league_and_team(league_id, team_id)

@app.route(f'/api/{config.API_VENUES_ENDPOINT}/<int:league_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_venues(league_id):
    return get_venues_by_league_id(league_id)

@app.route(f'/api/{config.API_SQUADS_ENDPOINT}/<int:team_id>')
@cross_origin(origin=config.FRONTEND_DOMAIN)  # Allow CORS on this specific route
def serve_get_squads(team_id):
    return get_squad_by_team_id(team_id)

@app.route('/api/bottle/data', methods=['POST'])
@cross_origin(origin=config.FRONTEND_DOMAIN)
def receive_bottle_data():
    data = request.get_json()

    if not data:
        return {"error": "No JSON received"}, 400

    saved_data, error = handle_bottle_post(data)

    if error:
        return {"error": error}, 400

    print("Saved bottle state:", saved_data)
    return {"status": "ok"}, 200

@app.route('/api/bottle/data', methods=['GET'])
@cross_origin(origin=config.FRONTEND_DOMAIN)
def get_bottle_data():
    return handle_bottle_get()

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5003))  # Fallback to 5003 if PORT not set
    app.run(host="0.0.0.0", port=port)