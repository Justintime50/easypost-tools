# Shipment Details Download script
# Outputs CSV text report for purchased production shipments
#
#  Usage:
#  python3 ShipmentReport_3x.py "optional API KEY" (if not using env vars)
#
#  0.2  Revised API key display     02 Jan 2020  joshua.biagio@easypost.com
#  0.1  Corrected handling of zero shipments returned     02 Jan 2020  joshua.biagio@easypost.com
#  0.0  Initial version     27 Dec 2019  joshua.biagio@easypost.com
#
# Note: this script makes raw endpoint queries instead of using the easypost
# API Python modules to limit the amount of dependencies that are required

#############################################################################
# Copyright (C) 2019 by EasyPost, Inc. <support@easypost.com>
#
# Permission to use, copy, modify, and/or distribute this software for
# any purpose with or without fee is hereby granted.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
# WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
# AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
# DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
# PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
# TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
# PERFORMANCE OF THIS SOFTWARE.
#############################################################################

import csv
import json
import os
import sys
from base64 import b64encode
from datetime import datetime
from http.client import HTTPSConnection
from urllib.parse import urlencode


# environmental var that stores our production API key;
# set to "" if not used
ENV_VAR_API_KEY = ""

# output folder for generated location
# defaults to ~/Documents (Linux/MacOS) or C:\\Users\\<CURRENT_USER_NAME>\\Documents (Windows)
# hard-code to some other path if desired
OUTPUT_FOLDER = os.path.join(os.path.expanduser('~'), 'Documents')

# modify startDate below to suit
startDate = "2019-01-01T00:00:00Z"
endDate = datetime.utcnow().isoformat()

URLBASE = "/v2/"


def getURL(api_key, url, list_data):
    """
    inspired by https://stackoverflow.com/a/7000784
    """
    # create our connection
    conn = HTTPSConnection("api.easypost.com")

    # build our authentication header
    b64userpassword = b64encode(bytes(api_key + ":", encoding='ascii')).decode("ascii")
    headers = {
        'Authorization': 'Basic %s' % b64userpassword,
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'text/plain',
        'User-Agent': 'python3 ShipmentReport_3x.py v0.2',
    }

    # build our urlecode parameters dictionary by iterating through the values passed in and
    # splitting on '='
    ueparams = dict(val.split('=') for val in list_data)
    params = urlencode(ueparams)

    try:
        conn.request('GET', f'{URLBASE}{url}', params, headers=headers)
        res = conn.getresponse()
        print(res.status, res.reason)
        res_str = res.read()
        data = json.loads(res_str)
    except Exception:
        data = {}
    return data


if __name__ == "__main__":
    # first look for the API key passed in from the command line
    if len(sys.argv) == 2:
        API_KEY = sys.argv[1]
        API_KEY = API_KEY.replace('"', '').replace("'", '')

    # otherwise, try to load it from the environment
    else:
        try:
            # attempt to read the key from the environment
            # N.B. needs to be a production key
            API_KEY = os.environ[ENV_VAR_API_KEY]
        except Exception:
            API_KEY = ''

    print(f"Using API key: '{API_KEY[:5]}" + ("*" * (len(API_KEY) - 5)) + "'...")

    # retrieve the shipments in pages
    # on the first page, just use dates
    # each subsequent page, pass in the last seen shipment ID, to force the next page
    has_more = True
    shipments = []
    params = ['page_size=100', f'start_datetime={startDate}', f'end_datetime={endDate}']
    while has_more:
        data = getURL(API_KEY, 'shipments', params)
        if 'shipments' in data and len(data['shipments']) > 0:
            for s in data['shipments']:
                shipments.append(s)
            print(f'Shipments processed: {len(shipments)}')
            has_more = data['has_more']
            params = [
                'page_size=100',
                f'start_datetime={startDate}',
                f'end_datetime={endDate}',
                f'before_id={shipments[-1]["id"]}',
            ]
        else:
            has_more = False

    # build file name
    n = str(datetime.now())
    n = n.replace('-', '').replace(' ', '_').replace(':', '')
    outfile = os.path.join(OUTPUT_FOLDER, (n + '.csv'))

    print(f"Creating file '{outfile}'...")

    # format all the returned shipment data
    rows = []
    for shipment in shipments:
        data = [
            shipment['created_at'],
            shipment['id'],
            shipment['reference'],
            shipment['mode'],
            shipment['to_address']['id'],
            shipment['from_address']['id'],
            shipment['return_address']['id'],
            shipment['buyer_address']['id'],
            shipment['parcel']['id'],
        ]

        data += [
            shipment['customs_info']['id'] if shipment['customs_info'] else '',
            shipment['scan_form']['id'] if shipment['scan_form'] else '',
        ]

        fees = {f['type']: f['amount'] for f in shipment['fees']}
        sign = '-' if str(shipment['refund_status']) == 'refunded' else ''

        data += [
            (sign if ('LabelFee' in fees and float(fees['LabelFee']) > 0.0) else '')
            + (fees['LabelFee'] if 'LabelFee' in fees else ''),  # noqa
            (sign if ('PostageFee' in fees and float(fees['PostageFee']) > 0.0) else '')
            + (fees['PostageFee'] if 'PostageFee' in fees else ''),
            (sign if ('InsuranceFee' in fees and float(fees['InsuranceFee']) > 0.0) else '')
            + (fees['InsuranceFee'] if 'InsuranceFee' in fees else ''),
        ]

        sr = shipment['selected_rate']
        data += [shipment['insurance'], sr['id'], sr['carrier'], sr['service'], sr['rate']]

        pl = shipment['postage_label']
        data += [pl['id'], pl['label_url']]

        data += [shipment['is_return'], shipment['tracking_code'], shipment['usps_zone'], shipment['status']]

        data += [
            shipment['tracker']['id'] if shipment['tracker'] else '',
            shipment['tracker']['public_url'] if shipment['tracker'] else '',
        ]

        data += [shipment['refund_status'], shipment['batch_id'], shipment['batch_status'], shipment['batch_message']]

        data = [(i if i else '') for i in data]
        rows.append(data)

    cols = (
        'created_at',
        'id',
        'reference',
        'mode',
        'to_address.id',
        'from_address.id',
        'return_address.id',
        'buyer_address.id',
        'parcel.id',
        'customs_info.id',
        'scan_form.id',
        'label_fee',
        'postage_fee',
        'insurance_fee',
        'insured_value',
        'selected_rate.id',
        'selected_rate.carrier',
        'selected_rate.service',
        'selected_rate.rate',
        'postage_label.id',
        'postage_label.url',
        'is_return',
        'tracking_code',
        'usps_zone',
        'status',
        'tracker.id',
        'tracker.public_url',
        'refund_status',
        'batch_id',
        'batch_status',
        'batch_message',
    )

    # store data in a CSV
    with open(outfile, mode='w', encoding='utf-8', newline='\n') as f:
        writer = csv.writer(f, dialect='excel', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(cols)
        writer.writerows(rows)

    print(f'Total number of shipments in file: {len(rows)}')
