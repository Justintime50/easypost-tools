"""
How to use this script:
- [Getting Shipment Transcripts](https://phab.easypo.net/phame/post/view/42/getting_shipment_transcripts/)
"""

# Python Standard Library Imports
import argparse
import json

# Third Party (PyPI) Imports
import requests


class EZTranscriptCLI(object):
    def __init__(self):
        pass

    def main(self):
        arg_parser = argparse.ArgumentParser(
            description='EasyPost Transcript Generator.')
        arg_parser.add_argument(
            '-s', '--shipment',
            help='Get shipment transcript',
            action='store_true',
            required=False
        )
        arg_parser.add_argument(
            '-o', '--order',
            help='Get order transcript',
            action='store_true',
            required=False
        )
        arg_parser.add_argument(
            '--host',
            help='Host',
            required=False
        )
        arg_parser.add_argument(
            '-p', '--port',
            help='Port',
            required=False
        )

        args = arg_parser.parse_args()
        default_host = 'localhost'
        host = getattr(args, 'host', default_host) or default_host
        port = getattr(args, 'port')

        if args.shipment:
            request_json = {
                'credentials': self.get_credentials(),
                'shipment': self.get_shipment(),
            }

            path = 'v1/rates'
            url = 'http://{}:{}/{}'.format(host, port, path)
            response = requests.post(url, json=request_json)
            print(response.content)
            print(response.json())
        elif args.order:
            order_dict = self.get_order()
            to_address = order_dict['to_address']
            from_address = order_dict['from_address']
            return_address = order_dict['return_address']
            for i in range(len(order_dict['shipments'])):
                # inject the to_address, from_address from order level to individual shipments
                shipment = order_dict['shipments'][i]
                shipment['to_address'] = to_address
                shipment['from_address'] = from_address
                shipment['return_address'] = return_address

            request_json = {
                'credentials': self.get_credentials(),
                'order': order_dict,
            }

            path = 'v1/rates'
            url = 'http://{}:{}/{}'.format(host, port, path)
            response = requests.post(url, json=request_json)
            print(response.content)
            print(response.json())
        else:
            pass

    def get_credentials(self):
        with open('credentials.json', 'r') as f:
            credentials = json.loads(f.read())

        return credentials

    def get_shipment(self):
        with open('shipment.json', 'r') as f:
            shipment = json.loads(f.read())

        return shipment

    def get_order(self):
        with open('order.json', 'r') as f:
            order = json.loads(f.read())

        return order


if __name__ == '__main__':
    EZTranscriptCLI().main()
