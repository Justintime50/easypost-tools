import easypost
# import sys
# import eptest
import os
from dotenv import load_dotenv

load_dotenv()
eptest.api_key = os.getenv("EASYPOST_PROD_API_KEY")

payment_log_report = eptest.Report.create(
  start_date="2019-08-01",
  end_date="2019-08-23",
  type="payment_log"
)

refund_report = eptest.Report.create(
  start_date="2019-08-01",
  end_date="2019-08-23",
  type="refund"
)

shipment_report = eptest.Report.create(
  start_date="2019-08-01",
  end_date="2019-08-23",
  type="shipment"
)

tracker_report = eptest.Report.create(
  start_date="2019-08-01",
  end_date="2019-08-23",
  type="tracker"
)
