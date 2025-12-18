import pickle
import os

PICKLE_PATH = "bottle_state.pkl"

def save_bottle_state(data):
    with open(PICKLE_PATH, "wb") as f:
        pickle.dump(data, f)

def load_bottle_state():
    if not os.path.exists(PICKLE_PATH):
        return {}

    with open(PICKLE_PATH, "rb") as f:
        return pickle.load(f)

def handle_bottle_post(data):
    required_fields = ["water_level_percent", "total_drank_ml"]

    for field in required_fields:
        if field not in data:
            return None, f"Missing field: {field}"

    bottle_state = {
        "water_level_percent": data["water_level_percent"],
        "total_drank_ml": data["total_drank_ml"],
        "timestamp": data.get("timestamp")
    }

    save_bottle_state(bottle_state)
    return bottle_state, None

def handle_bottle_get():
    data = load_bottle_state()

    if not data:
        return {
            "water_level_percent": 0,
            "total_drank_ml": 0
        }

    return {
        "water_level_percent": data.get("water_level_percent", 0),
        "total_drank_ml": data.get("total_drank_ml", 0)
    }
