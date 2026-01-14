import base64
import os

import requests
from dotenv import load_dotenv


# Creates an API key for the authenticated user. Perfect for child users who do not have access to the dashboard
# You must pass in the mode you want the API key created for. You must use your API key of the same mode to authenticate

load_dotenv()
API_KEY = os.getenv("API_KEY")

ascii_encoded_api_key = API_KEY.encode("ascii")
base64_bytes = base64.b64encode(ascii_encoded_api_key)
base64_decoded_api_key = base64_bytes.decode("ascii")

headers = {
    "Authorization": f"Basic {base64_decoded_api_key}:",
}
response = requests.post(
    "https://api.easypost.com/v2/api_keys",
    headers=headers,
    json={
        "mode": "production",
    },
)

print(response.json())
