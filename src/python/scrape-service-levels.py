"""Scrape all the EasyPost service levels from https://www.easypost.com/docs/api"""
import requests
from bs4 import BeautifulSoup

X = 10

for i in range(X):
    try:

        # get the data
        # here we start at item 3974 and iterate for the variable X above
        data = requests.get('https://www.easypost.com/docs/api')

        # load data into bs4
        soup = BeautifulSoup(data.text, 'html.parser')

        # carrier = soup.find('div', {'select': 'predefined-selection nav form-control'}).text.strip()
        
        service_level = soup.find('div', {'class': 'carrier-*'})
        for ul in service_level.find_all('ul'):
            values = [li.text.strip() for li in ul.find_all('li')]

        print(values, "\n", file=open("service-levels.txt", "a"))
    except ValueError:
        print("Could not iterate the list provided.")
        break
