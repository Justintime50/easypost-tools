import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

shipment = easypost.Shipment.retrieve('shp_123...')
shipment.refund()
print(shipment)
