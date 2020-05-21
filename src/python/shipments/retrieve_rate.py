import easypost
import os
from dotenv import load_dotenv

# Setup
load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

rate = easypost.Rate.retrieve('rate_675afb1d32054566b6bc2760f9a76902')

print(rate)
