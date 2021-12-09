import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

trackers = easypost.Tracker.all(
    # Optionally filter trackers by page size and date range
    page_size=100,
    start_datetime='2020-03-01T08:50:00Z',
    end_datetime='2020-03-02T08:50:00Z',
)

print(trackers)
