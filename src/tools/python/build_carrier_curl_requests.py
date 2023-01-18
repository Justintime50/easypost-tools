import json
import os
import re

import easypost


# Builds a file containing every cURL request to add a Carrier Account via EasyPost
# USAGE: API_KEY=123... venv/bin/python build_carrier_curl_requests.py > carrier_curl_requests.sh
# You can use `INDIVIDUAL_FILES=true` to create individual files

URL = os.getenv('URL', 'https://api.easypost.com/v2')
API_KEY = os.getenv('API_KEY')
INDIVIDUAL_FILES = bool(os.getenv('INDIVIDUAL_FILES', False))
LINE_BREAK_CHARS = ' \\\n'
END_CHARS = '\n'
CUSTOM_WORKFLOW_CHARS = '## REQUIRES CUSTOM WORKFLOW ##\n'

FEDEX_CUSTOM_WORKFLOW_CARRIERS = [
    'FedexAccount',
    'FedexSmartpostAccount',
]
UPS_CUSTOM_WORKFLOW_CARRIERS = [
    'UpsAccount',
    'UpsDapAccount',
]
CANADAPOST_CUSTOM_WORKFLOW_CARRIERS = [
    'CanadaPostAccount',
]


def main():
    carrier_types = get_carrier_types()
    for carrier in sorted(carrier_types, key=lambda x: x['type']):
        curl_request = build_carrier_curl_request(carrier)
        if INDIVIDUAL_FILES:
            individual_file_path = os.path.join('src', 'reference', 'carrier_accounts', 'create_curl')
            if not os.path.exists(individual_file_path):
                os.makedirs(individual_file_path)

            with open(
                os.path.join(individual_file_path, f'{carrier["type"].lower().replace("account", "")}.sh'),
                'w',
            ) as carrier_curl_file:
                carrier_curl_file.write(re.sub(r'^.*?\n', '', curl_request))
        else:
            print(curl_request)


def get_carrier_types():
    """Get the carrier_types from the EasyPost API."""
    easypost.api_key = API_KEY
    easypost.api_base = URL
    carrier_accounts = easypost.CarrierAccount.types()

    return carrier_accounts


def build_carrier_curl_request(carrier):
    """Builds a single cURL request for a carrier via EasyPost."""
    carrier_output = f'# {carrier.get("type")}\n'
    carrier_output = add_curl_line(carrier_output, carrier)
    carrier_output = add_headers(carrier_output, carrier)
    carrier_output = add_credential_structure(carrier_output, carrier)

    return carrier_output


def add_curl_line(carrier_output: str, carrier: dict[str, str]) -> str:
    """Add curl command and registration url."""
    if carrier['type'] in (FEDEX_CUSTOM_WORKFLOW_CARRIERS or UPS_CUSTOM_WORKFLOW_CARRIERS):
        carrier_output += f'curl -X POST https://api.easypost.com/v2/carrier_accounts/register{LINE_BREAK_CHARS}'
    else:
        carrier_output += f'curl -X POST https://api.easypost.com/v2/carrier_accounts{LINE_BREAK_CHARS}'

    return carrier_output


def add_headers(carrier_output: str, carrier: dict[str, str]) -> str:
    """Add necessry headers and authentication."""
    carrier_output += f'-u "$EASYPOST_API_KEY":{LINE_BREAK_CHARS}'
    carrier_output += f'-H \'Content-Type: application/json\'{LINE_BREAK_CHARS}'

    return carrier_output


def add_credential_structure(carrier_output: str, carrier: dict[str, str]) -> str:
    """Iterate over the carrier fields and print the credential structure."""
    carrier_account_json = {
        'type': carrier['type'],
        'description': carrier['type'],
    }

    carrier_fields = carrier.get('fields').to_dict()
    # FedEx
    if carrier['type'] in FEDEX_CUSTOM_WORKFLOW_CARRIERS:
        carrier_account_json['registration_data'] = {}
        for category in carrier_fields['creation_fields']:
            for item in carrier_fields['creation_fields'][category]:
                carrier_account_json['registration_data'][item] = 'VALUE'

        carrier_output += f'-d \'{json.dumps(carrier_account_json, indent=2)}\''
        carrier_output += END_CHARS
        carrier_output = carrier_output.replace(f'{LINE_BREAK_CHARS}{END_CHARS}', f'{END_CHARS}')
    # UPS/CanadaPost
    elif carrier['type'] in (UPS_CUSTOM_WORKFLOW_CARRIERS or CANADAPOST_CUSTOM_WORKFLOW_CARRIERS):
        # TODO: Fix UPS carrier account
        # TODO: Fix CanadaPost carrier account
        pass
    # Normal carriers
    else:
        end = END_CHARS
        carrier_account_json['carrier_account'] = {}
        # top_level here means `credentials` or `test_credentials` or `custom_workflow`
        for top_level in carrier_fields:
            # TODO: If there is a custom_workflow such as 3rd party auth or a similar flow
            # we should warn about that here. The credential structure will differ from
            # a normal carrier account and is currently not automated
            if top_level == 'custom_workflow':
                end += CUSTOM_WORKFLOW_CHARS
            else:
                top_level_carrier_fields = carrier_fields[top_level]
                for item in top_level_carrier_fields:
                    if carrier_account_json['carrier_account'].get(top_level) is None:
                        carrier_account_json['carrier_account'][top_level] = {}
                    carrier_account_json['carrier_account'][top_level][item] = 'VALUE'

        carrier_output += f'-d \'{json.dumps(carrier_account_json, indent=2)}\''
        carrier_output += end
        carrier_output = carrier_output.replace(f'{LINE_BREAK_CHARS}{END_CHARS}', f'{END_CHARS}')

    return carrier_output


if __name__ == '__main__':
    main()
