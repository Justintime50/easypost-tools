import os
import requests


# USAGE: API_KEY=123... URL=http://localhost... venv/bin/python build_carrier_curl_requests.py > carrier_curl_requests.sh  # noqa

URL = os.getenv('URL', 'https://api.easypost.com/v2/carrier_types')
API_KEY = os.getenv('API_KEY')


def get_carrier_types():
    """Get the carrier_types from the EasyPost API.
    """
    carrier_types = requests.get(
        URL,
        auth=requests.auth.HTTPBasicAuth(API_KEY, '')
    )
    return carrier_types.json()


def build_carrier_curl_requests(carrier_types):
    """Builds a cURL request for each carrier available via EasyPost.
    """
    for carrier in carrier_types:
        # Print general info like curl command, auth, and carrier type/description
        fedex_has_custom_workflow = carrier.get('type') in ['FedexAccount', 'FedexSmartpostAccount']
        print('\n# ' + carrier.get('type'))
        if fedex_has_custom_workflow:
            print('curl -X POST https://api.easypost.com/v2/carrier_accounts/register \\')
        else:
            print('curl -X POST https://api.easypost.com/v2/carrier_accounts \\')
        print("-u 'API_KEY': \\")
        print(f"-d 'carrier_account[type]={carrier.get('type')}' \\")
        print(f"-d 'carrier_account[description]={carrier.get('type')}' \\")

        # Iterate over the carrier fields and print the credential structure
        if fedex_has_custom_workflow:
            for category in carrier.get('fields')['creation_fields']:
                for item in carrier.get('fields')['creation_fields'][category]:
                    print(f"-d 'carrier_account[registration_data][{item}]=VALUE' \\")
        else:
            for top_level in carrier.get('fields'):
                # If there is a custom_workflow such as 3rd party auth or a similar flow
                # we should warn about that here. The credential structure will differ from
                # a normal carrier account
                # TODO: Fix UPS carrier account cURL
                if top_level == 'custom_workflow':
                    print('## CUSTOM WORKFLOW ##')
                else:
                    for item in carrier.get('fields')[top_level]:
                        print(f"-d 'carrier_account[{top_level}][{item}]=VALUE' \\")
        print('| json_pp')


def main():
    carrier_types = get_carrier_types()
    build_carrier_curl_requests(carrier_types)


if __name__ == '__main__':
    main()
