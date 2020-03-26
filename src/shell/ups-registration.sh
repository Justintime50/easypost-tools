#!/bin/bash

# Add a UPS carrier account to your EasyPost account (post September 2019 only!)\
# Keep a leading zero on invoice numbers

source ../../.env

curl -X POST https://api.easypost.com/v2/ups_registrations \
    -u "$EASYPOST_PROD_API_KEY": \
    -d "ups_registration[account_number]=" \
    -d "ups_registration[name]=" \
    -d "ups_registration[street1]=" \
    -d "ups_registration[city]=" \
    -d "ups_registration[state]=" \
    -d "ups_registration[postal_code]=" \
    -d "ups_registration[country]=U" \
    -d "ups_registration[email]=" \
    -d "ups_registration[phone]=" \
    -d "ups_registration[company]=" \
    -d "ups_registration[website]=" \
    -d "ups_registration[title]=" \
    -d "ups_registration[invoice_number]=" \
    -d "ups_registration[invoice_date]=" \
    -d "ups_registration[invoice_amount]=" \
    -d "ups_registration[invoice_currency]=" \
    -d "ups_registration[invoice_control_id]=" \
    | json_pp
