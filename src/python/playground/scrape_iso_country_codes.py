import sys
import requests
from bs4 import BeautifulSoup

# Scrape the ISO Country Codes @ https://en.wikipedia.org/wiki/ISO_3166-1
# USAGE: python3 scrape_iso_country_codes.py > iso_country_data.txt


def main():
    try:
        website = requests.get('https://en.wikipedia.org/wiki/ISO_3166-1')
        soup = BeautifulSoup(website.text, 'html.parser')
        tables = soup.find_all('table')
        country_table = tables[1]  # Scrape the 2nd table which is the ISO Country Codes

        for row in country_table.find_all('tr')[1:]:
            # Here we could add the 5th column which is a link to each sudivision page
            # Then, we could scrape the details of every country (eg: US states, etc)
            row_items = [td.text.strip() for td in row.find_all('td')]
            row_items = {
                'country': row_items[0],  # TODO: Encode this string properly
                'alpha_2_code': row_items[2],
                'alpha_3_code': row_items[3],
            }
            print(row_items)
            # Optionally write data to a file here
            # with open('iso_country_codes.txt', 'a') as f:
            #     f.write(str(row_items))
    except ValueError:
        sys.exit('Could not iterate the list provided.')


if __name__ == '__main__':
    main()
