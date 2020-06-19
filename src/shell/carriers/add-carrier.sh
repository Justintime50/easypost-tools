#!/bin/bash

# Add a carrier account to your EasyPost account (UPS/FedEx - pre September 2019 only)

curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u API_KEY_HERE: \
    -d "carrier_account[type]=FedexAccount" \
    -d "carrier_account[description]=VALUE" \
    -d "carrier_account[reference]=VALUE" \
    -d "carrier_account[credentials][account_number]=VALUE" \
    -d "carrier_account[credentials][shipping_streets]=VALUE" \
    -d "carrier_account[credentials][shipping_city]=VALUE" \
    -d "carrier_account[credentials][shipping_state]=VALUE" \
    -d "carrier_account[credentials][shipping_postal_code]=VALUE" \
    -d "carrier_account[credentials][shipping_country_code]=VALUE" \
    -d "carrier_account[credentials][corporate_first_name]=VALUE" \
    -d "carrier_account[credentials][corporate_last_name]=VALUE" \
    -d "carrier_account[credentials][corporate_job_title]=VALUE" \
    -d "carrier_account[credentials][corporate_company_name]=VALUE" \
    -d "carrier_account[credentials][corporate_phone_number]=VALUE" \
    -d "carrier_account[credentials][corporate_email_address]=VALUE" \
    -d "carrier_account[credentials][corporate_streets]=VALUE" \
    -d "carrier_account[credentials][corporate_city]=VALUE" \
    -d "carrier_account[credentials][corporate_state]=VALUE" \
    -d "carrier_account[credentials][corporate_postal_code]=VALUE" \
    -d "carrier_account[credentials][corporate_country_code]=VALUE" \
    | json_pp
