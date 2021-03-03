import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

shipments = easypost.Shipment.all(
    page_size=2,
    start_datetime='2021-01-01T00:00:00Z',
    end_datetime='2021-02-01T00:00:00Z',
)

print(shipments)
