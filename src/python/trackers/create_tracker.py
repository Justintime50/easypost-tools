import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

tracker = easypost.Tracker.create(
    tracking_code='2756302021',
    carrier='DHLExpress'
)

print(tracker)
