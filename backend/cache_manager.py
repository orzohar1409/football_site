import os
import time
import pickle
from typing import Any
from config import config

# Ensure the cache directory exists
os.makedirs(config.CACHE_DIR, exist_ok=True)


def load_cache(cache_key: config.CacheKeys, item_id: str) -> Any:
    """Load cached data for a specific item ID if it exists and is still valid."""
    cache_path = os.path.join(config.CACHE_DIR, f"{cache_key.value.key}_{item_id}.pkl")
    if os.path.exists(cache_path):
        with open(cache_path, 'rb') as f:
            cache_data, cache_time = pickle.load(f)
            # Check if the cache is still valid based on expiration time
            if time.time() - cache_time < cache_key.value.expiration:
                print(f"Loaded {cache_key.value.key} data for {item_id} from cache.")
                return cache_data
    return None


def save_cache(cache_key: config.CacheKeys, data: Any, item_id: str) -> None:
    """Save data to cache for a specific item ID with a timestamp."""
    cache_path = os.path.join(config.CACHE_DIR, f"{cache_key.value.key}_{item_id}.pkl")
    with open(cache_path, 'wb') as f:
        pickle.dump((data, time.time()), f)
    print(f"Saved {cache_key.value.key} data for {item_id} to cache.")
