import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

rate = easypost.Rate.retrieve('rate_675afb1d32054566b6bc2760f9a76902')

print(rate)
