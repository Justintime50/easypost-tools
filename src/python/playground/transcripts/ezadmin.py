"""ezadmin.py

For an example of how to use this script:
- [Getting Shipment Transcripts](https://phab.easypo.net/phame/post/view/42/getting_shipment_transcripts/)

Paste URL: https://phab.easypo.net/P436
"""

# -*- coding: utf-8 -*-

# Python Standard Library Imports
import argparse
import json
import os

# Third Party (PyPI) Imports
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv


load_dotenv()


class EZAdminCLI(object):
    def __init__(self):
        pass

    def main(self):
        arg_parser = argparse.ArgumentParser(description='EasyPost Admin CLI.')
        arg_parser.add_argument(
            '-ca', '--carrier_account_id',
            help='Carrier account id.',
            required=False
        )
        arg_parser.add_argument(
            '-o', '--order_id',
            help='Order id.',
            required=False
        )
        arg_parser.add_argument(
            '-p', '--pickup_id',
            help='Pickup id.',
            required=False
        )
        arg_parser.add_argument(
            '-s', '--shipment_id',
            help='Shipment id.',
            required=False
        )
        arg_parser.add_argument(
            '-r', '--replica',
            help='Get replica',
            action='store_true'
        )

        crawler = EZAdminCrawler()

        args = arg_parser.parse_args()
        replica = getattr(args, 'replica', False)
        result = None

        if args.carrier_account_id:
            carrier_account_id = args.carrier_account_id
            result = crawler.get_carrier_account_json(carrier_account_id)
        elif args.order_id:
            order_id = args.order_id
            result = crawler.get_order_json(order_id, replica=replica)
        elif args.pickup_id:
            pickup_id = args.pickup_id
            shipment_id = args.shipment_id
            result = crawler.get_pickup_json(pickup_id, shipment_id=shipment_id, replica=replica)
        elif args.shipment_id:
            shipment_id = args.shipment_id
            result = crawler.get_shipment_json(shipment_id, replica=replica)
        else:
            # do nothing
            print('No arguments specified. Try running with -h to see usage')

        if result:
            if type(result) == dict:
                print(json.dumps(result, indent=4))


class EZAdminCrawler(object):
    EZAUTH = os.environ.get('EZAUTH')

    BASE_URL = 'https://easypost-admin.easypo.net'
    RESOURCES = {
        'carrier_account': 'easy_post~carrier_account',
        'order': 'easy_post~order',
        'pickup': 'easy_post~pickup',
        'shipment': 'easy_post~shipment',
    }

    USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36'  # noqa

    def __init__(self):
        self.visited = {}

    def call_api(self, url, method='get', params=None, headers=None, cookies=None):
        """Wrapper for calling EasyPost Admin
        """
        if headers is None:
            headers = {
                'User-Agent': self.USER_AGENT,
            }

        if cookies is None:
            cookies = {
                'ezauth': self.EZAUTH,
            }

        response = getattr(requests, method)(url, params=params, headers=headers, cookies=cookies)

        return response

    def call_json_api(self, url, method='get', params=None, headers=None, cookies=None):
        """Wrapper for calling an EasyPost Admin JSON endpoint
        """
        try:
            response = self.call_api(url, method=method, params=params, headers=headers, cookies=cookies)
            response_json = response.json()
        except ValueError as e:
            if '%s' % e == 'No JSON object could be decoded':
                raise Exception('EZAuth token is expired')
            else:
                raise

        return response_json

    def get_resource_url(self, resource_key, **kwargs):
        resource_path = self.RESOURCES[resource_key]
        resource_id = kwargs['{}_id'.format(resource_key)]

        url = '{}/{}/{}'.format(
            self.BASE_URL,
            resource_path,
            resource_id
        )
        return url

    def get_carrier_account_id(self, public_id):
        account_id = None

        url = '{}{}'.format(self.BASE_URL, self.RESOURCES['carrier_account'])

        params = 'f[public_id][1][o]=is&f[public_id][1][v]={}'.format(public_id)

        response = self.call_api(url, params=params)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            list_elt = soup.find('div', id='list')
            div = list_elt.find('div')
            data_react_props = div['data-react-props']
            data = json.loads(data_react_props)
            row = data['table']['rows'][0]
            account_details_url = row['menu'][0]['a']['href']
            # user_details_url = row['attributes'][2]['div']['a']['href']
            account_id = account_details_url.split('/')[-1]
        else:
            pass

        return account_id

    def get_carrier_account_credentials_account_number_by_public_id(self, public_id):
        account_id = self.get_carrier_account_id(public_id)
        account_number = self.get_carrier_account_credentials_account_number(account_id)
        return account_number

    def get_contract_id_by_carrier_account_id(self, carrier_account_id):
        carrier_account_json = self.get_carrier_account_json(carrier_account_id)
        credentials = carrier_account_json['credentials']
        contract_id = credentials['contract_id']

        return contract_id

    def get_carrier_account_credentials_account_number(self, carrier_account_id):
        carrier_account_json = self.get_carrier_account_json(carrier_account_id)
        account_number = carrier_account_json['credentials']['account_number']
        return account_number

    ##
    # Methods to retrieve JSON for EasyPost objects

    def get_carrier_account_json(self, carrier_account_id):
        url = self.get_resource_url('carrier_account', carrier_account_id=carrier_account_id)

        carrier_account_json = self.call_json_api(url)

        return carrier_account_json

    def get_pickup_json(self, pickup_id, shipment_id=None, replica=False):
        """Retrieves the JSON for a `pickup_id`
        """
        resource_type = 'pickup'
        url = self.get_resource_url(resource_type, pickup_id=pickup_id)

        pickup_json = self.call_json_api(url)

        if replica:
            pickup_json = EZTransformer(resource_type, pickup_json).replicate()

        if shipment_id:
            shipment_json = self.get_shipment_json(shipment_id, replica=replica)
            pickup_json['shipment'] = shipment_json

        return pickup_json

    def get_shipment_json(self, shipment_id, replica=False):
        """Retrieves the JSON for a `shipment_id`
        """
        resource_type = 'shipment'
        url = self.get_resource_url(resource_type, shipment_id=shipment_id)

        shipment_json = self.call_json_api(url)

        if replica:
            shipment_json = EZTransformer(resource_type, shipment_json).replicate()

        return shipment_json

    def get_order_json(self, order_id, replica=False):
        """Retrieves the JSON for an `order_id` that has already been purchased
        """
        resource_type = 'order'
        url = self.get_resource_url(resource_type, order_id=order_id)

        order_json = self.call_json_api(url)

        if replica:
            order_json = EZTransformer(resource_type, order_json).replicate()

        return order_json


class EZTransformer(object):

    def __init__(self, object_type, raw_json):
        self.object_type = object_type
        self.raw_json = raw_json

    def get_raw_keys(self):
        RAW_KEYS_MAP = {
            # order
            'order': EZSchemas.ORDER_RAW_KEYS,
            'order_shipments_*': EZSchemas.ORDER_SHIPMENT_RAW_KEYS,
            'order_shipments_*_parcel': EZSchemas.PARCEL_RAW_KEYS,
            'order_to_address':  EZSchemas.ADDRESS_RAW_KEYS,
            'order_buyer_address':  EZSchemas.ADDRESS_RAW_KEYS,
            'order_return_address':  EZSchemas.ADDRESS_RAW_KEYS,
            'order_from_address':  EZSchemas.ADDRESS_RAW_KEYS,
            # pickup
            'pickup': EZSchemas.PICKUP_RAW_KEYS,
            'pickup_address': EZSchemas.ADDRESS_RAW_KEYS,
            # shipment
            'shipment': EZSchemas.SHIPMENT_RAW_KEYS,
            'shipment_from_address': EZSchemas.ADDRESS_RAW_KEYS,
            'shipment_to_address': EZSchemas.ADDRESS_RAW_KEYS,
            'shipment_return_address': EZSchemas.ADDRESS_RAW_KEYS,
            'shipment_parcel': EZSchemas.PARCEL_RAW_KEYS,
        }

        fallback_keys = list(self.raw_json.keys())
        raw_keys = RAW_KEYS_MAP.get(self.object_type, fallback_keys)
        return raw_keys

    @property
    def is_dict(self):
        return type(self.raw_json) == dict

    @property
    def is_list(self):
        return type(self.raw_json) == list

    def replicate(self):
        if self.is_dict:
            raw_keys = self.get_raw_keys()
            replica_json = {
                key: self.deep_replica(key)
                for key
                in raw_keys
            }
        elif self.is_list:
            replica_json = [
                self.deep_replica(index)
                for index
                in range(len(self.raw_json))
            ]
        else:
            # scalar type
            replica_json = self.raw_json

        return replica_json

    def deep_replica(self, key):
        """Generates a deep copy of an EasyPost object at `self.raw_json[key]`

        `key` is a dictionary key if `self.raw_json` is a dict
        `key` is a list index if `self.raw_json` is a list
        """
        is_index = self.is_list
        value = self.raw_json[key]

        if type(value) in (dict, list,):
            next_object_type_key = '*' if is_index else key
            next_object_type = '{}_{}'.format(self.object_type, next_object_type_key)
            next_raw_json = value

            replica_json = EZTransformer(next_object_type, next_raw_json).replicate()
        else:
            replica_json = value

        return replica_json


class EZSchemas(object):
    ORDER_RAW_KEYS = [
        # 'id',
        # 'object',
        # 'reference',
        'mode',
        'to_address',
        'from_address',
        'return_address',
        'buyer_address',
        'shipments',
        # 'rates'
        # 'messages',
        'is_return',
    ]

    ADDRESS_RAW_KEYS = [
        'mode',
        'street1',
        'street2',
        'city',
        'state',
        'zip',
        'country',
        'residential',
        'name',
        'company',
        'phone',
        'email',
        'federal_tax_id',
        'state_tax_id',
    ]

    PARCEL_RAW_KEYS = [
        # 'id',
        # 'object',
        'mode',
        'length',
        'width',
        'height',
        'predefined_package',
        'weight',
        # 'created_at',
        # 'updated_at',
    ]

    PICKUP_RAW_KEYS = [
        # 'id',
        'reference',
        'mode',
        'address',
        # 'is_acccount_address',
        'instructions',
        # 'messages',
        # 'confirmation',
        # 'shipment',
        # 'address',
        'min_datetime',
        'max_datetime',
        # 'pickup_rates',
        # 'created_at',
        # 'updated_at',
    ]

    SHIPMENT_RAW_KEYS = [
        # 'id',
        # 'object',
        # 'reference',
        'mode',
        'to_address',
        'from_address',
        'return_address',
        # 'buyer_address',
        'parcel',
        'customs_info',
        # 'scan_form',
        # 'forms',
        # 'insurance',
        # 'rates',
        # 'selected_rate',
        # 'postage_label',
        # 'messages',
        'options',
        'is_return',
        # 'tracking_code',
        # 'usps_zone',
        # 'status',
        # 'tracker',
        # 'fees',
        # 'refund_status',
        # 'batch_id',
        # 'batch_status',
        # 'batch_message',
    ]

    ORDER_SHIPMENT_RAW_KEYS = [
        # 'id',
        # 'object',
        # 'reference',
        'mode',
        # 'to_address',
        # 'from_address',
        # 'return_address',
        # 'buyer_address',
        'parcel',
        'customs_info',
        # 'scan_form',
        # 'forms',
        # 'insurance',
        # 'rates',
        # 'selected_rate',
        # 'postage_label',
        # 'messages',
        'options',
        # 'is_return',
        # 'tracking_code',
        # 'usps_zone',
        # 'status',
        # 'tracker',
        # 'fees',
        # 'refund_status',
        # 'batch_id',
        # 'batch_status',
        # 'batch_message',
    ]

    CUSTOMS_INFO_KEYS = [
        # 'id',
        # 'object',
        'eel_pfc',
        'value',
        'contents_type',
        'contents_explanation',
        'customs_certify',
        'customs_signer',
        'non_delivery_option',
        'restriction_type',
        'restriction_comments',
        'customs_items',
        # 'created_at',
        # 'updated_at',
    ]

    CUSTOMS_ITEMS_KEYS = [
        # 'id',
        # 'object',
        'description',
        'quantity',
        'value',
        'weight',
        'hs_tariff_number',
        'code',
        'origin_country',
        'currency',
        # 'created_at',
        # 'updated_at',
    ]


if __name__ == '__main__':
    EZAdminCLI().main()
