import os
import re

import easypost
from dotenv import load_dotenv


# A perfect use case for this script would be rebuilding an env file with all your carrier account IDs
# USAGE: EASYPOST_PROD_API_KEY=123... venv/bin/python build_carrier_env_file.py > carriers.env


load_dotenv()
API_KEY = os.getenv("EASYPOST_PROD_API_KEY")


def main():
    carriers = get_carrier_accounts()
    carrier_env_variables = format_carriers_to_env(carriers)

    # TODO: Save to file here
    for carrier in carrier_env_variables:
        print(carrier)


def get_carrier_accounts():
    """Get the list of carrier accounts from the EasyPost API."""
    client = easypost.EasyPostClient(API_KEY)
    carrier_accounts = client.carrier_account.all()

    return carrier_accounts


def format_carriers_to_env(carriers):
    """Formats the carrier data into environment variables."""
    carriers_list = []

    for carrier in carriers:
        carrier_name = carrier["readable"].upper()
        formatted_carrier_name = re.sub("[()]+", "", carrier_name).replace(" ", "_")
        env_variable_carrier_name = formatted_carrier_name + "=" + carrier["id"]
        carriers_list.append(env_variable_carrier_name)

    carriers_list.sort()

    return carriers_list


if __name__ == "__main__":
    main()
