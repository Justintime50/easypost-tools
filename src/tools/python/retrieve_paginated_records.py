import os

import easypost
from dotenv import load_dotenv

# Retrieve a list of paginated records such as scanforms or shipments.
# Because EasyPost paginates lists of records at a max of 100 items, you may at times need to iterate the pages.
# This tool will combine all records between two dates and print their IDs and timestamps to console along with
# how many pages were retrieved. You can also filter the larger list fo records by passing a comma separated list
# of records IDs to the `FILTER` env variable. See usage example below for more info.
#
# Usage: EASYPOST_TEST_API_KEY=123 FILTER="sf_123,sf_456" START_DATE="2020-05-01T00:00:00Z" \
# END_DATE="2020-06-02T00:00:00Z" venv/bin/python retrieve_paginated_records.py

load_dotenv()

EASYPOST_TEST_API_KEY = os.getenv('EASYPOST_TEST_API_KEY')
START_DATE = os.getenv('START_DATE', '2020-05-01T00:00:00Z')
END_DATE = os.getenv('END_DATE', '2020-06-02T00:00:00Z')
PAGE_SIZE = os.getenv('PAGE_SIZE', 100)  # The EasyPost API maxes out at 100 records per page
RECORDS_TO_FILTER = os.getenv('FILTER')  # Provide a comma-separated string of record IDs to filter by


def main():
    easypost.api_key = EASYPOST_TEST_API_KEY

    all_records, num_of_pages = get_paginated_records()

    for record in all_records:
        formatted_records_to_filter = RECORDS_TO_FILTER.lower().split(',') if RECORDS_TO_FILTER else ''
        if not RECORDS_TO_FILTER or (RECORDS_TO_FILTER and record.id in formatted_records_to_filter):
            print(f'{record.id}: {record.created_at}')

    print(f'Number of pages: {str(num_of_pages)}')

    return all_records, num_of_pages


def get_paginated_records(all_records=[], last_record_id=None, num_of_pages=1):
    # TODO: Make this dynamic, can be items like [ScanForm, Shipment]
    records = easypost.ScanForm.all(
        start_datetime=START_DATE,
        end_datetime=END_DATE,
        before_id=last_record_id,
        page_size=PAGE_SIZE,
    )

    # TODO: Make this dynamic, can be items like ['scan_forms', 'shipments']
    for record in records['scan_forms']:
        all_records.append(record)

    if records.has_more:
        # TODO: Make this dynamic, can be items like [scan_forms, shipments]
        last_record_id = records.scan_forms[-1].id
        num_of_pages += 1
        all_records, num_of_pages = get_paginated_records(all_records, last_record_id, num_of_pages)

    return all_records, num_of_pages


if __name__ == '__main__':
    main()
