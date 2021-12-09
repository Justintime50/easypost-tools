import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

try:
    shipment = easypost.Shipment.retrieve('shp_123...')
    response = shipment.buy(rate={'id': 'rate_123...'})
    print(response)
except Exception as error:
    print(error)
