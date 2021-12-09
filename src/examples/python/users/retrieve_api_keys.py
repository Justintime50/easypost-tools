import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

# Retrieve child user's API keys
child = easypost.User.retrieve('user_123...')
child_keys = child.all_api_keys()

print(child_keys)
