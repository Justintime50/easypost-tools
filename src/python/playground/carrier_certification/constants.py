import os

from dotenv import load_dotenv

# DO NOT STORE PII IN THIS FILE, USE THE .ENV FILE INSTEAD

load_dotenv()
CARRIER_NAME = 'Bond'
PROD_CREDENTIALS = {
    'api_key': os.getenv('BOND_PROD_API_KEY')
}
TEST_CREDENTIALS = {
    'api_key': os.getenv('BOND_TEST_API_KEY')
}

LABEL_FORMATS = ['PNG', 'PDF', 'ZPL']

# Could create a list of addresses to test against here
TO_ADDRESS = {
    'name': 'Dr. Steve Brule',
    'street1': '228 Park Ave S',
    'city': 'NY',
    'state': 'NY',
    'zip': '10003',
    'country': 'US',
    'phone': '4153334444',
    'email': 'dr_steve_brule@gmail.com'
}
FROM_ADDRESS = {
    'name': 'Dr. Steve Brule',
    'street1': '228 Park Ave S',
    'city': 'NY',
    'state': 'NY',
    'zip': '10003',
    'country': 'US',
    'phone': '4153334444',
    'email': 'dr_steve_brule@gmail.com'
}
