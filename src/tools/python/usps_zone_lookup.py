import os

import requests

# Get the USPS Zone based off a destination and origin zip code
# Usage: DESTINATION_ZIP=12345 ORIGIN_ZIP=54321 venv/bin/python usps_zone_lookup.py
# Attribution: https://www.easypost.com/usps-zone-lookup

USPS_ZONE_LOOKUP_URL = 'https://www.easypost.com/api/v2/usps_zones'
DESTINATION_ZIP = os.getenv('DESTINATION_ZIP')
ORIGIN_ZIP = os.getenv('ORIGIN_ZIP')


def get_usps_zone_by_zips():
    url_params = {
        'to': DESTINATION_ZIP,
        'from': ORIGIN_ZIP,
    }

    response = requests.get(
        url=USPS_ZONE_LOOKUP_URL,
        params=url_params,
    ).json()

    return response


def main():
    zone = get_usps_zone_by_zips()
    print(zone['usps_zone'])


if __name__ == '__main__':
    main()
