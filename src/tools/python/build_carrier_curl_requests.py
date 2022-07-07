import os

import easypost

# Builds a file containing every cURL request to add a Carrier Account via EasyPost
# USAGE: API_KEY=123... venv/bin/python build_carrier_curl_requests.py > carrier_curl_requests.sh

# TODO: Rework tool to create JSON cURL requests instead of form-encoded ones

URL = os.getenv('URL', 'https://api.easypost.com/v2')
API_KEY = os.getenv('API_KEY')
LINE_BREAK_CHARS = ' \\\n'
END_CHARS = ' |\njson_pp\n'
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
    # TODO: this may have a side effect of ordering the items inside each object too
    for carrier in sorted(carrier_types, key=lambda x: x['type']):
        curl_request = build_carrier_curl_request(carrier)
        print(curl_request)


def get_carrier_types():
    """Get the carrier_types from the EasyPost API."""
    easypost.api_key = API_KEY
    easypost.api_base = URL
    carrier_accounts = easypost.CarrierAccount.types()

    return carrier_accounts


def build_carrier_curl_request(carrier):
    """Builds a cURL request for a carrier via EasyPost."""
    # Add carrier account title comment
    carrier_output = f'# {carrier.get("type")}\n'

    # Add curl command and registration url
    if carrier.get('type') in (FEDEX_CUSTOM_WORKFLOW_CARRIERS or UPS_CUSTOM_WORKFLOW_CARRIERS):
        carrier_output += f'curl -X POST https://api.easypost.com/v2/carrier_accounts/register{LINE_BREAK_CHARS}'
    else:
        carrier_output += f'curl -X POST https://api.easypost.com/v2/carrier_accounts{LINE_BREAK_CHARS}'

    # Add authentication, carrier account type and description
    carrier_output += f'-u "$EASYPOST_API_KEY":{LINE_BREAK_CHARS}'
    carrier_output += f"-d 'carrier_account[type]={carrier.get('type')}'{LINE_BREAK_CHARS}"
    carrier_output += f"-d 'carrier_account[description]={carrier.get('type')}'{LINE_BREAK_CHARS}"

    # Iterate over the carrier fields and print the credential structure
    carrier_fields = carrier.get('fields').to_dict()
    # FedEx
    if carrier.get('type') in FEDEX_CUSTOM_WORKFLOW_CARRIERS:
        for category in carrier_fields['creation_fields']:
            for item in carrier_fields['creation_fields'][category]:
                carrier_output += f"-d 'carrier_account[registration_data][{item}]=VALUE'{LINE_BREAK_CHARS}"
        carrier_output += END_CHARS
        carrier_output = carrier_output.replace(f'{LINE_BREAK_CHARS}{END_CHARS}', f'{END_CHARS}')
    # UPS/CanadaPost
    elif carrier.get('type') in (UPS_CUSTOM_WORKFLOW_CARRIERS or CANADAPOST_CUSTOM_WORKFLOW_CARRIERS):
        # TODO: Fix UPS carrier account
        # TODO: Fix CanadaPost carrier account
        pass
    # Normal carriers
    else:
        end = END_CHARS
        for top_level in carrier_fields:
            # If there is a custom_workflow such as 3rd party auth or a similar flow
            # we should warn about that here. The credential structure will differ from
            # a normal carrier account and is currently not automated
            if top_level == 'custom_workflow':
                end += CUSTOM_WORKFLOW_CHARS
            else:
                top_level_carrier_fields = carrier_fields[top_level]
                for item in top_level_carrier_fields:
                    carrier_output += f"-d 'carrier_account[{top_level}][{item}]=VALUE'{LINE_BREAK_CHARS}"

        carrier_output += end
        carrier_output = carrier_output.replace(f'{LINE_BREAK_CHARS}{END_CHARS}', f'{END_CHARS}')
    return carrier_output


if __name__ == '__main__':
    main()
