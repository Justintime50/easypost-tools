from base64 import b64encode
from collections import namedtuple
from datetime import datetime
from functools import reduce, partial
from http.client import HTTPSConnection
import os
import json
import multiprocessing

# Create thousands of customs_items and attach to dozens of shipments all within seconds
# Usage: caFedexAPI=ca_123... API_KEY=123... python3 test_multiprocessor_shipment_customsinfo_raw.py

API_KEY = os.environ['API_KEY']
URLBASE = "/v2/"

ADDRESS_FILTER_KEYS = ('street1', 'street2', 'city', 'state', 'zip', 'name',
                       'country', 'phone', 'residential', 'email', 'company')
CUSTOMS_INFO_KEYS = ('eel_pfc', 'customs_certify', 'customs_signer', 'contents_type', 'contents_explanation',
                     'restriction_type', 'restriction_comments', 'non_delivery_option', 'customs_items')
CUSTOMS_ITEM_KEYS = ("description", "hs_tariff_number", "origin_country", "quantity",
                     "value", "weight", "code", "manufacturer", "currency")
PARCEL_KEYS = ("length", "width", "height", "weight", "predefined_package")

ResultsTuple = namedtuple('ResultsTuple', ['num_customs_items', 'has_fedex_rates',
                                           'duration', 'ship_id', 'qty', 'total_val', 'errors'])


with open(os.path.expanduser('~/Downloads/test.json'), mode='r', encoding='utf-8') as F:
    cust_dict = json.load(F)
    if "shipment" in cust_dict:
        cust_dict = cust_dict['shipment']

# create addresses from the order obj
# sanitize them from the customer JSON
from_address = {k: v for k, v in cust_dict['from_address'].items() if k in ADDRESS_FILTER_KEYS}
parcel = {k: v for k, v in cust_dict['parcel'].items() if k in PARCEL_KEYS}
options = cust_dict['options']

# for r in (False, True):

to_address = {k: v for k, v in cust_dict['to_address'].items() if k in ADDRESS_FILTER_KEYS}

customs_item = {
    'description': 'Sweat shirts',
    # 'code': '67890',
    'quantity': 10,
    'weight': 11,
    'value': 25.75,
    'hs_tariff_number': '654321',
    'origin_country': 'US'
}

carrier_accounts = [{"id": os.environ['caFedexAPI']}]


def _post_putURL_json(CMD, api_key, url, json_dict_data):
    """
    inspired by https://stackoverflow.com/a/7000784
    """
    # create our connection
    conn = HTTPSConnection("api.easypost.com")

    # build our authentication header
    b64userpassword = b64encode(
        bytes(api_key + ":", encoding='utf-8')).decode("utf-8")
    headers = {'Authorization': 'Basic %s' % b64userpassword,
               'User-Agent': 'python3 raw_api test-multiproc shipment_customsinfo',
               'Content-type': 'application/json',
               'Accept': 'text/plain'}

    # if data passed in as dict, convert to str
    if type(json_dict_data) == dict:
        json_dict_data = json.dumps(json_dict_data)

    try:
        conn.request(CMD, f'{URLBASE}{url}', json_dict_data, headers=headers)
        res_str = conn.getresponse().read()
        data = json.loads(res_str)
    except Exception:
        data = {}
    return data


postURL = partial(_post_putURL_json, 'POST', API_KEY)


def hasRates(shp, carrier):
    return any([r['carrier'] == carrier for r in shp['rates']])


def evalShipment(s):
    return [len(s['customs_info']['customs_items'])] + [hasRates(s, c) for c in ('FedEx',)]


def buildAndEvalShipment(n):
    s = datetime.now()
    customs_info = {
        "contents_explanation": "merchandise",
        "contents_type": "merchandise",
        "customs_certify": True,
        "customs_signer": "Shipping Manager",
        "eel_pfc": "NOEEI 30.37(a)",
        "non_delivery_option": "return",
        "restriction_comments": "",
        "restriction_type": "none",
        "customs_items": []
    }
    customs_info['customs_items'] = [customs_item for i in range(n)]
    # print(f"Creating order with '{n}' parcels...")
    params = {'shipment': dict(to_address=to_address,
                               from_address=from_address,
                               parcel=parcel,
                               options=options,
                               carrier_accounts=carrier_accounts,
                               customs_info=customs_info)
              }
    shipment = postURL('shipments', json.dumps(params))
    customs_info = shipment['customs_info']
    # num_customs_items = len(customs_info['customs_items'])
    qty = sum([int(ci['quantity']) for ci in customs_info['customs_items']])
    total_val = sum([float(ci['value']) for ci in customs_info['customs_items']])
    res = evalShipment(shipment)[-1]
    dur = datetime.now() - s
    errors = ' | '.join((re['message'] for re in shipment['messages']))
    print(f"Finished evaluating shipment with '{n}' customs_items - [{dur!s}]")
    # ['num_customs_items', 'has_fedex_rates', 'duration', 'ship_id', 'qty', 'total_val', 'errors']
    rt = ResultsTuple._make((n, res, dur, shipment['id'], str(qty), str(total_val), errors))
    return rt


def start_process():
    pass
    # sprint('Starting', multiprocessing.current_process().name)


if __name__ == '__main__':
    # 10 - 100 in increments of 10, for the purposes of finding the limits based on carrier
    n_inputs = list(range(75, 250 + 1, 5))

    # create our pool
    pool = multiprocessing.Pool(
        processes=multiprocessing.cpu_count() * 2,  # allow 2 processes per CPU core
        initializer=start_process,
    )

    s = datetime.now()
    # map each input to a 'buildAndEvalOrder' function call, handled by one of the processes in the pool
    pool_outputs = pool.map(buildAndEvalShipment, n_inputs)

    # tell the pool to not accept any more tasks
    pool.close()

    # block and wait until the work completes
    pool.join()

    dur = datetime.now() - s

    # sort the results by number of shipments in ascending order
    pool_outputs.sort()

    # add our "header"
    pool_outputs.insert(
        0, list(ResultsTuple._fields))

    # print our results
    print(pool_outputs)
    total = reduce(lambda x, y: x+y, [i.duration for i in pool_outputs[1:]])
    # print(dur, reduce(lambda x, y: x+y, [i[-1] for i in pool_outputs[1:]]))
    print(f'Time spent parallel processing: {dur!s}')
    print(f'Time spent if processing serially: {total!s}')
    print(f'Parallel speedup: {(total/dur):.2f}x')
