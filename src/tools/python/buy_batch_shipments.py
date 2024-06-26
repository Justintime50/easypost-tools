import os
import time
from threading import Thread

import easypost
from dotenv import load_dotenv


# Concurrently iterate over each shipment in a batch and buy the lowest rate
# Usage: venv/bin/python buy_batch_shipments.py

load_dotenv()
API_KEY = os.getenv("EASYPOST_TEST_API_KEY")
client = easypost.EasyPostClient(API_KEY)


def buy_lowest_rate(shipment):
    try:
        shp = client.shipment.retrieve(shipment.id)
        shp.buy(rate=shp.lowest_rate())
        print(f'{shp.id} bought!')
    except Exception as error:
        print(error)


batch = client.batch.retrieve('batch_123...')

for shipment in batch.shipments:
    time.sleep(0.1)
    Thread(target=buy_lowest_rate, args=(shipment,)).start()
