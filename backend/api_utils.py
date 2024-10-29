import requests
from config import config
import json


def request_api(url):
    payload = {}
    headers = config.API_REQUEST_HEADERS
    response = requests.request("GET", url, headers=headers, data=payload)
    return response.json()
