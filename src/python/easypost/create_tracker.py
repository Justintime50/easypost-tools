import easypost
import os
from dotenv import load_dotenv

# Setup
load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

tracker = easypost.Tracker.create(
    tracking_code='2756302021',
    carrier='DHLExpress'
)

print(tracker)
