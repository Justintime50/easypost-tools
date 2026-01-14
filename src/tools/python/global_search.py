import os
import re

import easypost
from dotenv import load_dotenv


# Globally search for any EasyPost record
# Usage: EASYPOST_TEST_API_KEY=123 ID=shp_123... venv/bin/python global_search.py

API_KEY = os.getenv("EASYPOST_TEST_API_KEY")
ID = os.getenv("ID")


def main():
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)

    record = search(client)
    print(record)


def search(client):
    """Retrieve various EasyPost records based on the ID prefix"""
    prefix_search = re.compile(r"^[^_]*")
    prefix = re.search(prefix_search, ID).group(0)

    record_lookup = {
        "adr": client.address.retrieve,
        "batch": client.batch.retrieve,
        "ca": client.carrier_account.retrieve,
        "cstinfo": client.customs_info.retrieve,
        "cstitem": client.customs_item.retrieve,
        "evt": client.event.retrieve,
        "hook": client.webhook.retrieve,
        "ins": client.insurance.retrieve,
        "order": client.order.retrieve,
        "pickup": client.pickup.retrieve,
        "plrep": client.report.retrieve,
        "prcl": client.parcel.retrieve,
        "rate": client.rate.retrieve,
        "refrep": client.report.retrieve,
        "sf": client.scan_form.retrieve,
        "shp": client.shipment.retrieve,
        "shpinvrep": client.report.retrieve,
        "shprep": client.report.retrieve,
        "trk": client.tracker.retrieve,
        "trkrep": client.report.retrieve,
        "user": client.user.retrieve,
    }

    try:
        record = record_lookup[prefix](ID)
    except Exception as error:
        print(error)

    return record


if __name__ == "__main__":
    main()
