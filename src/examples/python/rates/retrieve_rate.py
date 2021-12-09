import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

rate = easypost.Rate.retrieve('rate_123...')

print(rate)
