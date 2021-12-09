import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

carrier_accounts = easypost.CarrierAccount.all()
print(carrier_accounts)
