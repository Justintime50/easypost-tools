import sys
import os
import requests
from bs4 import BeautifulSoup

# Scrape the EasyPost docs @ https://www.easypost.com/docs/api
# USAGE: SECTION=predefined-packages python3 scrape_ep_docs.py
# Section options: 'predefined-packages' OR 'service-levels'


def main(self):
    try:
        website = requests.get('https://www.easypost.com/docs/api')
        soup = BeautifulSoup(website.text, 'html.parser')
        carriers = soup.find('article', {'class': os.getenv('SECTION')})

        # Iterate over each carrier and their items
        for carrier in carriers.find_all('div', {'class': 'tab-pane'}):
            items = [li.text.strip() for li in carrier.find_all('li')]
            name = carrier.find('img')['alt']
            output = '* ' + name + '\n\t\n\t'.join(items) + '\n'
            print(output)
            with open('easypost_service_levels.txt', 'a') as log:
                log.write(output)
    except ValueError:
        sys.exit("Could not iterate the list provided.")


if __name__ == "__main__":
    main()
