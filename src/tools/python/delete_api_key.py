import base64
import os

import requests
from dotenv import load_dotenv


# Deletes an API key for the authenticated user. Perfect for child users who do not have access to the dashboard

load_dotenv()
API_KEY = os.getenv("EASYPOST_PROD_API_KEY")

ascii_encoded_api_key = API_KEY.encode("ascii")
base64_bytes = base64.b64encode(ascii_encoded_api_key)
base64_decoded_api_key = base64_bytes.decode("ascii")

headers = {
    "Authorization": f"Basic {base64_decoded_api_key}:",
}

# NOTE: this endpoint does not return a response
requests.delete(
    "https://api.easypost.com/v2/api_keys/ak_123...",
    headers=headers,
)
