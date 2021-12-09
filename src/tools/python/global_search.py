import os
import re

import easypost
from dotenv import load_dotenv

# Globally search for any EasyPost record
# Usage: ID=shp_123... venv/bin/python global_search.py

ID = os.getenv('ID')


def main():
    load_dotenv()
    easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

    record = search()
    print(record)


def search():
    """Retrieve various EasyPost records based on the ID prefix"""
    prefix_search = re.compile(r'^[^_]*')
    prefix = re.search(prefix_search, ID).group(0)

    record_lookup = {
        'adr': easypost.Address.retrieve,
        'sf': easypost.ScanForm.retrieve,
        'evt': easypost.Event.retrieve,
        'cstitem': easypost.CustomsItem.retrieve,
        'cstinfo': easypost.CustomsInfo.retrieve,
        'prcl': easypost.Parcel.retrieve,
        'shp': easypost.Shipment.retrieve,
        'ins': easypost.Insurance.retrieve,
        'rate': easypost.Rate.retrieve,
        'batch': easypost.Batch.retrieve,
        'trk': easypost.Tracker.retrieve,
        'order': easypost.Order.retrieve,
        'pickup': easypost.Pickup.retrieve,
        'ca': easypost.CarrierAccount.retrieve,
        'user': easypost.User.retrieve,
        'shprep': easypost.Report.retrieve,
        'plrep': easypost.Report.retrieve,
        'trkrep': easypost.Report.retrieve,
        'refrep': easypost.Report.retrieve,
        'shpinvrep': easypost.Report.retrieve,
        'hook': easypost.Webhook.retrieve,
    }

    try:
        record = record_lookup[prefix](ID)
    except Exception as error:
        print(error)

    return record


if __name__ == '__main__':
    main()
