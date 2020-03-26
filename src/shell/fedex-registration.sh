#!/bin/bash

# Add a FedEx carrier account to your EasyPost account (post September 2019 only!)

source ../../.env

curl -X POST https://api.easypost.com/v2/fedex_registrations \
    -u "$EASYPOST_PROD_API_KEY": \
    -d "fedex_registration[description]=FedEx Account" \
    -d "fedex_registration[account_number]=ACCOUNT_NUMBER" \
    -d "fedex_registration[corporate_first_name]=CORPORATE_FIRST_NAME" \
    -d "fedex_registration[corporate_last_name]=CORPORATE_LAST_NAME" \
    -d "fedex_registration[corporate_company_name]=CORPORATE_COMPANY_NAME" \
    -d "fedex_registration[corporate_phone_number]=CORPORATE_PHONE_NUMBER" \
    -d "fedex_registration[corporate_email_address]=CORPORATE_EMAIL_ADDRESS" \
    -d "fedex_registration[corporate_streets]=CORPORATE_STREETS" \
    -d "fedex_registration[corporate_city]=CORPORATE_CITY" \
    -d "fedex_registration[corporate_state]=CORPORATE_STATE" \
    -d "fedex_registration[corporate_postal_code]=CORPORATE_POSTAL_CODE" \
    -d "fedex_registration[corporate_country_code]=CORPORATE_COUNTRY_CODE" \
    -d "fedex_registration[corporate_job_title]=CORPORATE_JOB_TITLE" \
    -d "fedex_registration[shipping_streets]=SHIPPING_STREETS" \
    -d "fedex_registration[shipping_city]=SHIPPING_CITY" \
    -d "fedex_registration[shipping_state]=SHIPPING_STATE" \
    -d "fedex_registration[shipping_postal_code]=SHIPPING_POSTAL_CODE" \
    -d "fedex_registration[shipping_country_code]=SHIPPING_COUNTRY_CODE" \
    | json_pp
