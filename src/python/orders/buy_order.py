import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

order = easypost.Order.retrieve("order_16e9b3a4c9104b408bc7103f0c7be2c7")
order.buy(carrier='FedEx', service='FEDEX_2_DAY')

print(order)
