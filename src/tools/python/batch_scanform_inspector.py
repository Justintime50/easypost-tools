import os
import sys
import time
from threading import Thread

import easypost
from dotenv import load_dotenv


# Iterate through shipments on a batch and return which scanforms they have associated if any.
#
# Usage: EASYPOST_TEST_API_KEY=123... BATCH=batch_123... venv/bin/python batch_scanform_inspector.py
# NOTE: This script won't identify a shipment's previous batch or scanform, only its most recent one

# TODO: This script could be improved upon by allowing custom logic
# (flags) such as only showing shipments from a list with certain
# criteria such as a statuses that aren't `created`

API_KEY = os.getenv("EASYPOST_TEST_API_KEY")


def main():
    """Run the script to iterate shipments and return data on
    scanforms if any
    """
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)

    batch = retrieve_batch(client)
    print(f'Batch Status: {batch.get("status")}')
    print('Shipment\'s Scanform Data from Batch:')

    iterate_shipments_in_batch(client, batch)


def retrieve_batch(client):
    """Retrieve an EasyPost Batch"""
    try:
        batch = client.batch.retrieve(os.getenv('BATCH'))
    except Exception as error:
        sys.exit(f'Could not retrieve Batch: {error}')
    return batch


def iterate_shipments_in_batch(client, batch):
    """Iterate over each shipment in a batch and grab its scanform data"""
    for shipment in batch.get('shipments'):
        Thread(
            target=retrieve_shipment_scanform_data,
            args=(
                client,
                shipment.id,
            ),
        ).start()
        time.sleep(0.2)
        # TODO: Add data to a list here


def retrieve_shipment_scanform_data(client, shipment_id):
    """Returns shipment data about scanforms that are associated
    with the batch
    """
    try:
        shipment = client.shipment.retrieve(shipment_id)
    except Exception as error:
        sys.exit(f'Could not retrieve Shipment: {error}')

    scanform_data = (
        {
            'scanform_id': shipment['scan_form'].get('id'),
            'scanform_status': shipment['scan_form'].get('status'),
            'scanform_message': shipment['scan_form'].get('message'),
            'scanform_url': shipment['scan_form'].get('form_url'),
        }
        if shipment.get('scan_form')
        else None
    )

    output = {
        shipment_id: scanform_data,
    }
    print(output)
    # TODO: Return data here


if __name__ == '__main__':
    main()
