import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

# payment_log_report = easypost.Report.retrieve('plrep_...')

# refund_report = easypost.Report.retrieve('refrep_...')

shipment_report = easypost.Report.retrieve('shprep_2dc60c4422014a1fa69da2d4d88408c4')
print(shipment_report)

# tracker_report = easypost.Report.retrieve('trkrep_...')
