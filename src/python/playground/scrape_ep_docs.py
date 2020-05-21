"""Scrape the EasyPost docs @ https://www.easypost.com/docs/api"""
import sys
import os
import requests
from bs4 import BeautifulSoup

# USAGE: SECTION=predefined-packages python3 scrape_ep_docs.py
# Section options: 'predefined-packages' OR 'service-levels'

try:
    # Setup required variables
    data = requests.get('https://www.easypost.com/docs/api')
    soup = BeautifulSoup(data.text, 'html.parser')
    carriers = soup.find('article', {'class': os.getenv('SECTION')})

    # Iterate over each carrier and their items
    for carrier in carriers.find_all('div', {'class': 'tab-pane'}):
        items = [li.text.strip()
                 for li in carrier.find_all('li')]
        name = carrier.find('img')['alt']
        output = '* ' + name + '\n\t' + \
            '\n\t'.join(items) + '\n'
        print(output)
        with open('easypost_service_levels.txt', 'a') as log:
            log.write(output)
except ValueError:
    sys.exit("Could not iterate the list provided.")
