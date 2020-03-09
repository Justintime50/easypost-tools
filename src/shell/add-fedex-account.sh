#!/bin/bash

# Add a FedEx carrier account to your EasyPost account (US & CA accounts only!)

source ../../.env

curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
    -u "$EASYPOST_PROD_API_KEY": \
    -d "carrier_account[type]=FedexAccount" \
    -d "carrier_account[description]=" \
    -d "carrier_account[reference]=" \
    -d "carrier_account[registration_data][account_number]=" \
    -d "carrier_account[registration_data][shipping_streets]=" \
    -d "carrier_account[registration_data][shipping_city]=" \
    -d "carrier_account[registration_data][shipping_state]=" \
    -d "carrier_account[registration_data][shipping_postal_code]=" \
    -d "carrier_account[registration_data][shipping_country_code]=" \
    -d "carrier_account[registration_data][corporate_first_name]=" \
    -d "carrier_account[registration_data][corporate_last_name]=" \
    -d "carrier_account[registration_data][corporate_job_title]=" \
    -d "carrier_account[registration_data][corporate_company_name]=" \
    -d "carrier_account[registration_data][corporate_phone_number]=" \
    -d "carrier_account[registration_data][corporate_email_address]=" \
    -d "carrier_account[registration_data][corporate_streets]=" \
    -d "carrier_account[registration_data][corporate_city]=" \
    -d "carrier_account[registration_data][corporate_state]=" \
    -d "carrier_account[registration_data][corporate_postal_code]=" \
    -d "carrier_account[registration_data][corporate_country_code]=" \
    | json_pp 
