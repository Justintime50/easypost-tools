import os
import re

import easypost
# import requests
from dotenv import load_dotenv

# USAGE: API_KEY=123... URL=http://localhost... venv/bin/python build_carrier_env_file.py > carriers.env
# A perfect use case for this script would be rebuilding an env file with all your carrier account IDs


load_dotenv()
URL = os.getenv('URL', 'https://api.easypost.com/v2/carrier_types')


def main():
    carriers = get_carrier_accounts()
    carrier_env_variables = format_carriers_to_env(carriers)

    # TODO: Save to file here
    for carrier in carrier_env_variables:
        print(carrier)


def get_carrier_accounts():
    """Get the list of carrier accounts from the EasyPost API.
    """
    # TODO: Retrieving carriers this way vs the CL may have missing data like ID
    # carriers = requests.get(
    #     URL,
    #     auth=requests.auth.HTTPBasicAuth(API_KEY, '')
    # )
    # return carriers.json()
    easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

    carrier_accounts = easypost.CarrierAccount.all()
    return carrier_accounts


def format_carriers_to_env(carriers):
    """Formats the carrier data into environment variables
    """
    carriers_list = []
    for carrier in carriers:
        carrier_name = carrier['readable'].upper()
        formatted_carrier_name = re.sub('[()]+', '', carrier_name).replace(' ', '_')
        env_variable_carrier_name = formatted_carrier_name + '=' + carrier['id']
        carriers_list.append(env_variable_carrier_name)

    carriers_list.sort()

    return carriers_list


if __name__ == '__main__':
    main()
