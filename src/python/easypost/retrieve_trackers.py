import easypost
import os
from dotenv import load_dotenv

# Setup
load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

trackers = easypost.Tracker.all(
    page_size = 100,
    start_datetime = "2020-03-01T08:50:00Z"
)

print(trackers)
