import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')


try:
    shipment = easypost.Shipment.retrieve('shp_3cba0177d3ca4bb9a00fedb9e5bc2cae')
    response = shipment.buy(rate={'id': 'rate_4ee872c4755d4af09ec91be0f4404c85'})
    print(response)
except Exception as error:
    print(error)
