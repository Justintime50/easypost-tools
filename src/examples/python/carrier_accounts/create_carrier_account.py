import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')


carrier_account = easypost.CarrierAccount.create(
    type="UpsAccount",
    description="NY Location UPS Account",
    reference="my-reference",
    credentials={
        "account_number": "A1A1A1",
        "user_id": "USERID",
        "password": "PASSWORD",
        "access_license_number": "ALN"
    }
)

print(carrier_account)
