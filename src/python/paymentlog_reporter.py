## Payment Log reporter
## Requests payment_log reports and optionally downloads ZIP files
## or the combined CSV of all data.
##
##  Usage: 
##  python3 paymentlog_reporter.py
##
##  0.0  Initial version     05 Mar 2020  joshua.biagio@easypost.com
## 
## Note: this script makes raw endpoint queries instead of using the easypost 
## API Python modules to limit the amount of dependencies that are required

#############################################################################
# Copyright (C) 2020 by Simpler Postage, Inc. (dba EasyPost) <support@easypost.com>
#
# Permission to use, copy, modify, and/or distribute this software for
# any purpose with or without fee is hereby granted.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
# WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
# AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
# DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
# PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
# TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
# PERFORMANCE OF THIS SOFTWARE.
#############################################################################

from base64 import b64encode
import calendar
import csv
from datetime import datetime
from functools import partial
from http.client import HTTPSConnection
from io import BytesIO as BIO
from io import StringIO as SIO
import json
import os
from pathlib import Path
from time import sleep
from urllib.parse import urlparse
from urllib.request import urlopen
import zipfile

# user-settable params
API_KEY = ""  # "EZTK949...."
# user account was created "2019-08-22T14:18:02Z"
START_YR = 2019
START_MO = 8
DOWNLOAD_DIR = '~/Documents'
SAVE_REPORT_ZIP = False
GENERATE_COMBINED_CSV = True
# end user-settable params

# constants
B64USERPASSWORD = b64encode(
    bytes(API_KEY + ":", encoding='utf-8')).decode("utf-8")
USER_AGENT = 'python3 raw_api test-paymentlogreports'
URLBASE = "/v2/"
# end constants


# capture our current date so we know when to stop
NOW = datetime.now()


def getURL(url, json_dict_data=None):
    """
    inspired by https://stackoverflow.com/a/7000784
    """
    # create our connection
    conn = HTTPSConnection("api.easypost.com")

    # build our authentication header
    headers = {'Authorization': 'Basic %s' % B64USERPASSWORD,
               'User-Agent': USER_AGENT}

    if json_dict_data:
        headers.update({'Content-type': 'application/json',
                        'Accept': 'text/plain'})
        # if data passed in as dict, convert to str
        if type(json_dict_data) == dict:
            json_dict_data = json.dumps(json_dict_data)

    try:
        conn.request('GET', f'{URLBASE}{url}', json_dict_data, headers=headers)
        res_str = conn.getresponse().read()
        data = json.loads(res_str)
    except:
        data = {}
    return data


def _post_putURL_json(CMD, url, json_dict_data):
    """
    inspired by https://stackoverflow.com/a/7000784
    """
    # create our connection
    conn = HTTPSConnection("api.easypost.com")

    # build our authentication header
    headers = {'Authorization': 'Basic %s' % B64USERPASSWORD,
               'User-Agent': USER_AGENT,
               'Content-type': 'application/json',
               'Accept': 'text/plain'}

    # if data passed in as dict, convert to str
    if type(json_dict_data) == dict:
        json_dict_data = json.dumps(json_dict_data)

    try:
        conn.request(CMD, f'{URLBASE}{url}', json_dict_data, headers=headers)
        res_str = conn.getresponse().read()
        data = json.loads(res_str)
    except Exception as e:
        data = {}
    return data


# create our 'POST' command obj, so that we don't have to pass in the CMD
# this works because the post_putURL method only switches the "method";
# all other code is the same
#postURL = partial(_post_putURL, 'POST')
postURL = partial(_post_putURL_json, 'POST')

# our "PUT" command obj
#putURL = partial(_post_putURL, 'PUT')
putURL = partial(_post_putURL_json, 'PUT')


def saveReport(url, start_date, end_date):
    parsed_url = urlparse(url)
    url_path = parsed_url.path
    fn_stem = Path(url_path).stem

    out_path = Path(DOWNLOAD_DIR, '_'.join(
        (start_date.replace('-', ''), end_date.replace('-', ''), fn_stem))+'.zip')

    with urlopen(url) as F, out_path.expanduser().open('wb') as O:
        print(f"Saving '{url_path}' to '{out_path!s}'...")
        _ = O.write(F.read())


def getReportRows(url):
    with urlopen(url) as F:
        zip_bytes = F.read()

    bio = BIO(zip_bytes)
    _ = bio.seek(0)

    with zipfile.ZipFile(bio) as z:
        data = z.read(z.namelist()[0])
        sio = SIO(data.decode('utf-8'))
        _ = sio.seek(0)
        rows = [r for r in csv.reader(sio)]

    return rows


def getReportURLS(download=False, buildmasterreport=False):
    has_more = True
    params = {'start_date': f'{START_YR}-{START_MO:02}-01', 'page_size': 3}
    data = []
    report_rows = []
    while has_more:
        res = getURL('reports/payment_log', params)
        reports = res['reports']
        for r in reports:
            # filter results and ensure that we're only looking at
            # data that is on or after our requested start date
            # because the API can return data that is before our
            # requested date
            if r['start_date'] >= params['start_date']:
                data.append([r[k] for k in ('id', 'created_at',
                                            'start_date', 'end_date', 'url')])
        # update parameters to get to the "next page" of data
        params['before_id'] = reports[-1]['id']
        has_more = res['has_more']

    # sort our reports by start_date, created_at
    data.sort(key=lambda x: (x[2], x[1]))
    return data


if __name__ == '__main__':
    # request reports and print out their URL
    yr = START_YR
    mo = START_MO

    while True:
        if mo > NOW.month and yr == NOW.year:
            break
        try:
            # request payment log report
            rpt = postURL('reports/payment_log',
                          {'start_date': f'{yr}-{mo:02}-01', 'end_date': f'{yr}-{mo}-{calendar.monthlen(yr, mo)}'})
            # if the request was successful, a dictionary will be returned with a URL entry set to None (the report is being generated)
            if 'url' in rpt:
                # wait until the URL is populated
                while rpt['url'] is None:
                    rpt = getURL(API_KEY, f'reports/rpt["id"]')
                    sleep(0.1)

        except Exception as e:
            pass

        # move to our next month
        mo += 1
        # if we've gone past December, go to January of the next year
        if mo > 12:
            yr += 1
            mo = 1

    URLS = getReportURLS(True)
    for row in URLS:
        print(" | ".join(row))
        print()

    # save individual report files
    if SAVE_REPORT_ZIP:
        for row in URLS:
            rid, created_at, start_date, end_date, url = row
            saveReport(url, start_date, end_date)

    if GENERATE_COMBINED_CSV:
        row_key = set()

        hdr = None

        # create our output file
        output_path = Path(DOWNLOAD_DIR, '_'.join(
            (f'{START_YR}{START_MO:02}01',
             f'{NOW.year}{NOW.month:02}{calendar.monthlen(NOW.year, NOW.month):02}',
             'payment_log.csv')))

        print(f"Saving combined CSV to '{output_path!s}'...")

        with output_path.expanduser().open('w', encoding='utf-8') as F:
            # create a CSV writer for our output file
            wtr = csv.writer(F)

            # iterate over the report URLs
            for row in URLS:
                rid, created_at, start_date, end_date, url = row

                # download the ZIP file and unpack it for the embedded csv
                # return the rows in the embedded CSV
                data = getReportRows(url)

                # separate the header from the remaining rows
                h, rpt_rows = data[0], data[1:]

                # store our header if we haven't outputted it yet
                if not hdr:
                    _ = wtr.writerow(h)
                    hdr = h

                # iterate the report rows
                for r in rpt_rows:
                    # convert the row to a tuple so it can be hashed (needed to evaluate against the set)
                    # we want to ensure that our resulting CSV doesn't contain duplicate data
                    key = tuple(r)

                    # if we haven't seen the row, store it
                    if key not in row_key:
                        row_key.add(key)
                        _ = wtr.writerow(r)
                    else:
                        print(f"Skipping '{r!s}'...")
