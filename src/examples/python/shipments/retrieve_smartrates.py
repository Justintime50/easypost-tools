import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

try:
    shipment = easypost.Shipment.retrieve('shp_123...')
    smartrates = shipment.get_smartrates()

    print(smartrates)
except Exception as error:
    print(error)
