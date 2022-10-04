import json
import os
import sys

import requests
from bs4 import BeautifulSoup


# Scrape the EasyPost docs @ https://www.easypost.com/docs/api for predefined packages or service levels
# USAGE: SECTION=predefined-packages venv/bin/python scrape_ep_docs.py
# Section options: 'predefined-packages' OR 'service-levels'


SECTION = os.getenv('SECTION')


def main():
    try:
        website = requests.get('https://www.easypost.com/docs/api')
        soup = BeautifulSoup(website.text, 'html.parser')
        carriers = soup.find('article', {'class': SECTION})

        # Iterate over each carrier and their items
        output = {}
        for carrier in carriers.find_all('div', {'class': 'tab-pane'}):
            items = [li.text.strip() for li in carrier.find_all('li')]
            name = carrier.find('img')['alt']
            output[name] = items

        with open(f'easypost-{SECTION}.json', 'w') as filename:
            json.dump(output, filename, indent=4, sort_keys=True)
    except ValueError:
        sys.exit("Could not iterate the list provided.")


if __name__ == "__main__":
    main()
