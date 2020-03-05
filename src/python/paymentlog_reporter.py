import calendar
from datetime import datetime
import easypost
import os
from dotenv import load_dotenv
from time import sleep

load_dotenv()
easypost.api_key = os.getenv("EASYPOST_PROD_API_KEY")

# capture our current date so we know when to stop
now = datetime.now()

# user account was created "2019-08-22T14:18:02Z"
START_YR = 2019
START_MO = 8


def getLastDay(yr, mo):
    last = calendar.monthlen(yr, mo)
    return f'{yr}-{mo}-{last}'


# request reports and print out their URL
yr = START_YR
mo = START_MO


while True:
    if mo > now.month and yr == now.year:
        break
    try:
        rpt = easypost.Report.create(
            start_date=f'{yr}-{mo:02}-01',
            end_date=getLastDay(yr, mo),
            type="payment_log"
        )

        # while rpt.url is None:
        #     _ = rpt.refresh()
        #     sleep(0.1)

        print(f'{yr}-{mo:02}-01', getLastDay(yr, mo))
        print()

    except easypost.Error as e:
        print(e)

    mo += 1
    if mo > 12:
        yr += 1
        mo = 1
