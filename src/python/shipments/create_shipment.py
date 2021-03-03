import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

"""
to_address = easypost.Address.create(...)
from_address = easypost.Address.create(...)
parcel = easypost.Parcel.create(...)
customs_info = easypost.CustomsInfo.create(...)

shipment = easypost.Shipment.create(
  to_address=to_address,
  from_address=from_address,
  parcel=parcel,
  customs_info=customs_info
)
"""

# OR in one call

shipment = easypost.Shipment.create(
    to_address={
        'name': 'Dr. Steve Brule',
        'street1': '179 N Harbor Dr',
        'city': 'Redondo Beach',
        'state': 'CA',
        'zip': '90277',
        'country': 'US',
        'phone': '4153334444',
        'email': 'dr_steve_brule@gmail.com'
    },
    from_address={
        'name': 'EasyPost',
        'street1': '417 Montgomery Street',
        'street2': '5th Floor',
        'city': 'San Francisco',
        'state': 'CA',
        'zip': '94104',
        'country': 'US',
        'phone': '4153334444',
        'email': 'support@easypost.com'
    },
    parcel={
        'length': 20.2,
        'width': 10.9,
        'height': 5,
        'weight': 65.9
    },
    # customs_info=customs_info
)

print(shipment)
