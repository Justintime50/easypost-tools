import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

tracker = easypost.Tracker.create(tracking_code='EZ1000000001', carrier='USPS')

print(tracker)
