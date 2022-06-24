import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

pickup = easypost.Pickup.create(
    address={"id": "adr_123"},
    shipment={"id": "shp_123"},
    reference="my-first-pickup",
    min_datetime="2022-07-21 10:30:00",
    max_datetime="2022-07-22 10:30:00",
    is_account_address=False,
    instructions="Special pickup instructions",
)

print(pickup)
