import os
import time
from threading import Thread

import easypost

# Create multiple shipments quickly, save their ID's to a file
#
# Usage: EASYPOST_API_KEY=123... SHIPMENT_NUM=100 venv/bin/python create_multiple_shipments.py


API_KEY = os.getenv('EASYPOST_API_KEY')
SHIPMENT_NUM = int(os.getenv('SHIPMENT_NUM'))
FILE_NAME = 'shipment_id_list.txt'


def main():
    """Run the script to iterate shipments and scanform each
    """
    print('Creating multiple shipments...')
    easypost.api_key = API_KEY
    iterate_creating_shipments()
    print(f'Multiple shipments created, check {FILE_NAME}.')


def iterate_creating_shipments():
    """Iterate x number of times and create shipments
    """
    i = 0
    while i < SHIPMENT_NUM:
        Thread(target=create_shipment).start()
        time.sleep(0.5)
        i += 1


def create_shipment():
    """Create a shipment
    """
    shipment = easypost.Shipment.create(
        to_address={
            'name': 'Dr. Steve Brule',
            'street1': '179 N Harbor Dr',
            'city': 'Redondo Beach',
            'state': 'CA',
            'zip': '90277',
            'country': 'US',
            'phone': '4153334444',
            'email': 'dr_steve_brule@gmail.com'
        },
        from_address={
            'name': 'EasyPost',
            'street1': '417 Montgomery Street',
            'street2': '5th Floor',
            'city': 'San Francisco',
            'state': 'CA',
            'zip': '94104',
            'country': 'US',
            'phone': '4153334444',
            'email': 'support@easypost.com'
        },
        parcel={
            'length': 20.2,
            'width': 10.9,
            'height': 5,
            'weight': 65.9
        },
    )

    # TODO: Don't have this in the create shipment function, it's inefficient
    with open(FILE_NAME, 'a') as f:
        f.write(shipment.id + '\n')

    return shipment


if __name__ == '__main__':
    main()
