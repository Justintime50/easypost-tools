import easypost
import os
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

order = easypost.Order.create(
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
    shipments=[
        {
            "parcel": {
                "predefined_package": "FedExBox",
                "weight": 10.2
            }
        },
        {
            "parcel": {
                "predefined_package": "FedExBox",
                "weight": 17.5
            }
        }
    ],
    carrier_account=[os.getenv('FEDEX')]
)

print(order)
