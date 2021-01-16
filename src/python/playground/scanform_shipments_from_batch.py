import os
import time
from threading import Thread

import easypost
from dotenv import load_dotenv

# Iterate through shipments from a batch one by one and concurrently
# scanform them. Great when you have a troubled batch and don't know
# which shipments are bad.
#
# Usage: EASYPOST_PROD_API_KEY=123... BATCH=batch_123... python3 scanform_shipments_from_batch.py


def main():
    """Run the script to iterate shipments and scanform each
    """
    load_dotenv()
    easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')
    iterate_shipments_in_batch()


def iterate_shipments_in_batch():
    """Iterate over each shipment in a batch and
    attempt to scanform it
    """
    batch = easypost.Batch.retrieve(os.getenv('BATCH'))

    for shipment in batch['shipments']:
        Thread(target=scanform_shipment, args=(shipment,)).start()
        time.sleep(0.2)


def scanform_shipment(shipment):
    """Scanform a shipment
    """
    try:
        scanform = easypost.ScanForm.create(shipments=[shipment['id']])
        print(
            f'{scanform["id"]} generated successfully for {shipment["id"]}'
        )
    except Exception:
        print(f'Could not scanform {shipment["id"]}')


if __name__ == "__main__":
    main()
