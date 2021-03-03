import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

shipment = easypost.Shipment.retrieve('shp_57bf6f450c7447d59e143210d5fe5ec6')
shipment.refund()
print(shipment)
