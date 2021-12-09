import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

scan_form = easypost.ScanForm.create(shipments=['shp_123...'])

print(scan_form)
