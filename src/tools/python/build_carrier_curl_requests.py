import os

import easypost

# Builds a file containing every cURL request to add a Carrier Account via EasyPost
# USAGE: API_KEY=123... venv/bin/python build_carrier_curl_requests.py > carrier_curl_requests.sh

# TODO: Rework tool to create JSON cURL requests instead of form-encoded ones

URL = os.getenv('URL', 'https://api.easypost.com/v2')
API_KEY = os.getenv('API_KEY')


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
    fedex_custom_workflow_carriers = ['FedexAccount', 'FedexSmartpostAccount']
    ups_custom_workflow_carriers = ['UpsAccount', 'UpsDapAccount']
    canadapost_custom_workflow_carriers = ['CanadaPostAccount']

    # Add carrier account title comment
    carrier_output = f'# {carrier.get("type")}\n'

    # Add curl command and registration url
    if carrier.get('type') in (fedex_custom_workflow_carriers or ups_custom_workflow_carriers):
        carrier_output += 'curl -X POST https://api.easypost.com/v2/carrier_accounts/register \\\n'
    else:
        carrier_output += 'curl -X POST https://api.easypost.com/v2/carrier_accounts \\\n'

    # Add authentication, carrier account type and description
    carrier_output += "-u 'API_KEY': \\\n"
    carrier_output += f"-d 'carrier_account[type]={carrier.get('type')}' \\\n"
    carrier_output += f"-d 'carrier_account[description]={carrier.get('type')}' \\\n"

    # Iterate over the carrier fields and print the credential structure
    carrier_fields = carrier.get('fields').to_dict()
    if carrier.get('type') in fedex_custom_workflow_carriers:
        for category in carrier_fields['creation_fields']:
            for item in carrier_fields['creation_fields'][category]:
                carrier_output += f"-d 'carrier_account[registration_data][{item}]=VALUE' \\\n"
        carrier_output += '| json_pp\n'
    elif carrier.get('type') in (ups_custom_workflow_carriers or canadapost_custom_workflow_carriers):
        # TODO: Fix UPS carrier account
        # TODO: Fix CanadaPost carrier account
        pass
    else:
        end = '| json_pp\n'
        for top_level in carrier_fields:
            # If there is a custom_workflow such as 3rd party auth or a similar flow
            # we should warn about that here. The credential structure will differ from
            # a normal carrier account and is currently not automated
            if top_level == 'custom_workflow':
                end += '## REQUIRES CUSTOM WORKFLOW ##\n'
            else:
                for item in carrier_fields[top_level]:
                    carrier_output += f"-d 'carrier_account[{top_level}][{item}]=VALUE' \\\n"
        carrier_output += end
    return carrier_output


if __name__ == '__main__':
    main()
