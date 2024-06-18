import os

import easypost
from dotenv import load_dotenv


# Get the details of a carrier account by the carrier name.
# Usage: EASYPOST_PROD_API_KEY=123 CARRIER_ACCOUNT_NAME=USPS venv/bin/python carrier_account_detail_grabber.py

API_KEY = os.getenv('EASYPOST_PROD_API_KEY')
CARRIER_ACCOUNT_NAME = os.getenv('CARRIER_ACCOUNT_NAME')


def main():
    carrier = retrieve_carrier_by_name()
    print(carrier)


def retrieve_carrier_by_name():
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)

    carrier_accounts = client.carrier_account.all()
    for carrier in carrier_accounts:
        if carrier.type == CARRIER_ACCOUNT_NAME:
            return carrier
        else:
            return f'{CARRIER_ACCOUNT_NAME} not found!'


if __name__ == '__main__':
    main()
