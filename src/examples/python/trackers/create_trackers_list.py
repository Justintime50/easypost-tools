import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

# This endpoint does not return a response, you'll need to use webhooks to capture the data
easypost.Tracker.create_list(
    {
        '0': {'tracking_code': 'EZ1000000001', 'carrier': 'USPS'},
    },
)
