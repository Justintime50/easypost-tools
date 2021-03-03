import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

child = easypost.User.retrieve()
child_keys = child.all_api_keys()

print(child_keys)
