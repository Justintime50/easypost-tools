import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')

payment_log_report = easypost.Report.create(
    start_date='2019-08-01',
    end_date='2019-08-23',
    type='payment_log'
)

refund_report = easypost.Report.create(
    start_date='2019-08-01',
    end_date='2019-08-23',
    type='refund'
)

shipment_report = easypost.Report.create(
    start_date='2019-08-01',
    end_date='2019-08-23',
    type='shipment'
)

tracker_report = easypost.Report.create(
    start_date='2019-08-01',
    end_date='2019-08-23',
    type='tracker'
)

print(payment_log_report)
print(refund_report)
print(shipment_report)
print(tracker_report)
