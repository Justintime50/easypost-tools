import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

pickup = easypost.Pickup.retrieve("pickup_123")
pickup.buy(carrier="USPS", service="NextDay")

print(pickup)
