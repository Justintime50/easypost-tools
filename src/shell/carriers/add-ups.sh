#!/bin/bash

# Add a UPS carrier account to your EasyPost account (post September 2019 only!)\
# Keep a leading zero on invoice numbers

source ../../.env

curl -X POST https://api.easypost.com/v2/ups_registrations \
    -u "$EASYPOST_PROD_API_KEY": \
    -d "ups_registration[account_number]=VALUE" \
    -d "ups_registration[name]=VALUE" \
    -d "ups_registration[street1]=VALUE" \
    -d "ups_registration[city]=VALUE" \
    -d "ups_registration[state]=VALUE" \
    -d "ups_registration[postal_code]=VALUE" \
    -d "ups_registration[country]=VALUE" \
    -d "ups_registration[email]=VALUE" \
    -d "ups_registration[phone]=VALUE" \
    -d "ups_registration[company]=VALUE" \
    -d "ups_registration[website]=VALUE" \
    -d "ups_registration[title]=VALUE" \
    -d "ups_registration[invoice_number]=VALUE" \
    -d "ups_registration[invoice_date]=VALUE" \
    -d "ups_registration[invoice_amount]=VALUE" \
    -d "ups_registration[invoice_currency]=VALUE" \
    -d "ups_registration[invoice_control_id]=VALUE" \
    | json_pp
