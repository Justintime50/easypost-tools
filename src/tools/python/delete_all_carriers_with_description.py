import os

import easypost
from dotenv import load_dotenv

# Delete `all` records of a particular object
# Usage: EASYPOST_PROD_API_KEY=123... venv/bin/python delete_all_carriers_with_description.py

API_KEY = os.getenv("EASYPOST_PROD_API_KEY")


def main():
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)

    carrier_accounts = client.carrier_account.all(page_size=100)

    for carrier_account in carrier_accounts:
        if carrier_account["description"] == "UPS Account":
            client.carrier_account.delete(carrier_account["id"])


if __name__ == "__main__":
    main()
