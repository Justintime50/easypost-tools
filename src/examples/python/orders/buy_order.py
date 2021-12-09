import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

order = easypost.Order.retrieve("order_123...")
order.buy(carrier='FedEx', service='FEDEX_2_DAY')

print(order)
