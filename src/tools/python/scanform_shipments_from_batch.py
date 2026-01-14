import os
import time
from threading import Thread

import easypost
from dotenv import load_dotenv


# Iterate through shipments from a batch one by one and concurrently
# scanform them. Great when you have a troubled batch and don't know
# which shipments are bad.
#
# Usage: EASYPOST_TEST_API_KEY=123... BATCH=batch_123... venv/bin/python scanform_shipments_from_batch.py

API_KEY = os.getenv("EASYPOST_TEST_API_KEY")


def main():
    """Run the script to iterate shipments and scanform each."""
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)
    iterate_shipments_in_batch(client)


def iterate_shipments_in_batch(client):
    """Iterate over each shipment in a batch and attempt to scanform it."""
    batch = client.batch.retrieve(os.getenv("BATCH"))

    for shipment in batch["shipments"]:
        Thread(
            target=scanform_shipment,
            args=(
                client,
                shipment,
            ),
        ).start()
        time.sleep(0.2)


def scanform_shipment(client, shipment):
    """Scanform a shipment."""
    try:
        scanform = client.scan_form.create(shipments=[shipment["id"]])
        print(f"{scanform['id']} generated successfully for {shipment['id']}")
    except Exception:
        print(f"Could not scanform {shipment['id']}")


if __name__ == "__main__":
    main()
