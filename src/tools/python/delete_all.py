import os

import easypost
from dotenv import load_dotenv

# Delete `all` records of a particular object
# Usage: EASYPOST_PROD_API_KEY=123... venv/bin/python delete_all.py


def main():
    load_dotenv()
    easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

    carrier_accounts = easypost.CarrierAccount.all(page_size=100)

    for carrier_account in carrier_accounts:
        if carrier_account['description'] == 'UPS Account':
            print(carrier_account.delete())


if __name__ == '__main__':
    main()
