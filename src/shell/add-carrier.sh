#!/bin/bash

# Add a carrier account to your EasyPost account (UPS/FedEx - pre September 2019 only)

source ../../.env

curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u "EZAKf6f0be77c66748fa9fe8baec53481711agJQPmxRm7EiqawM6ARoug": \
    -d "carrier_account[type]=FedexAccount" \
    -d "carrier_account[description]=test" \
    -d "carrier_account[reference]=" \
    -d "carrier_account[credentials][account_number]=879876273" \
    -d "carrier_account[credentials][shipping_streets]=Room 1302 Building 7, No383 Panyu N" \
    -d "carrier_account[credentials][shipping_city]=Guangzhou" \
    -d "carrier_account[credentials][shipping_state]=Guangdong" \
    -d "carrier_account[credentials][shipping_postal_code]=511442" \
    -d "carrier_account[credentials][shipping_country_code]=CN" \
    -d "carrier_account[credentials][corporate_first_name]=Rona" \
    -d "carrier_account[credentials][corporate_last_name]=Wong" \
    -d "carrier_account[credentials][corporate_job_title]=Project Manager" \
    -d "carrier_account[credentials][corporate_company_name]=Feidi" \
    -d "carrier_account[credentials][corporate_phone_number]=13729971267" \
    -d "carrier_account[credentials][corporate_email_address]=rona.wong@fictiv.com" \
    -d "carrier_account[credentials][corporate_streets]=Room 1302 Building 7, No383 Panyu N" \
    -d "carrier_account[credentials][corporate_city]=Guangzhou" \
    -d "carrier_account[credentials][corporate_state]=Guangdong" \
    -d "carrier_account[credentials][corporate_postal_code]=511442" \
    -d "carrier_account[credentials][corporate_country_code]=CN" \
    | json_pp
