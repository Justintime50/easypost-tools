from base64 import b64encode
from http.client import HTTPSConnection
import json
import os

# Grab all the carrier types and build cURL examples for each

URLBASE = '/v2/'
API_KEY = os.environ['epProd']


def getURL(api_key, url):
    """
    inspired by https://stackoverflow.com/a/7000784
    """
    # create our connection
    conn = HTTPSConnection("api.easypost.com")

    # build our authentication header
    b64userpassword = b64encode(bytes(api_key + ":", encoding='utf-8')).decode("utf-8")
    auth = {'Authorization': 'Basic %s' % b64userpassword}

    try:
        conn.request('GET', f'{URLBASE}{url}', headers=auth)
        res_str = conn.getresponse().read()
        data = json.loads(res_str)
    except Exception:
        data = {}
    return data


def carrier_account_curlizer(ca_tmp, desc='', ref=''):
    _type = ca_tmp['type']
    _desc = ca_tmp['readable'] if not desc else desc
    vals = ['curl -X POST https://api.easypost.com/v2/carrier_accounts',
            '-u <YOUR_PRODUCTION_API_KEY>:',
            f"-d 'carrier_account[type]={_type}'",
            f"-d 'carrier_account[description]={_desc} Account'",
            ]
    if ref:
        vals += [f"-d 'carrier_account[reference]={ref}'"]
    vals += [f"-d 'carrier_account[{kd}][{k}]={k.upper()}'" for kd, kv in ca_tmp['fields'].items()
             for k, v in kv.items()]
    print('\n'.join([i + ' \\' for i in vals[:-1]]+[vals[-1]]))


if __name__ == '__main__':
    # build our carrier_account_type : account_fields dictionary mapping
    carrier_types = {t['type']: t for t in getURL(API_KEY, 'carrier_types')}

    # output the results for carriers that do not have a custom workflow
    for k in sorted(carrier_types.keys()):
        carrier_type_dict = carrier_types[k]
        if not carrier_type_dict['fields'].get('custom_workflow', False):
            print(k.upper())
            carrier_account_curlizer(carrier_type_dict)
