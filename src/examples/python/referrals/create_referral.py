import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')


try:
    address = easypost.beta.Referral.create(
        name='test',
        email="test@test.com",
        phone="8888888888",
    )

    print(address)
except Exception as error:
    print(error)
