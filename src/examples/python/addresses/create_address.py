import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')


address = easypost.Address.create(
    street1="417 Montgomery Street",
    street2="FLOOR 5",
    city="San Francisco",
    state="CA",
    zip="94104",
    country="US",
    company="EasyPost",
    phone="415-456-7890",
)

print(address)
