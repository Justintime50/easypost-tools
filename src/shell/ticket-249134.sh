#!/bin/bash

# Add a FedEx carrier account to your EasyPost account (post September 2019 only!)

source ../../.env

curl -X POST https://api.easypost.com/v2/fedex_registrations \
    -u EZAKf6f0be77c66748fa9fe8baec53481711agJQPmxRm7EiqawM6ARoug: \
    -d "fedex_registration[description]=Demo Carrier Account25" \
    -d "fedex_registration[account_number]=145380588" \
    -d "fedex_registration[corporate_first_name]=Kathryn R" \
    -d "fedex_registration[corporate_last_name]=Saunders" \
    -d "fedex_registration[corporate_company_name]=J-SHOPPE/JJJJOUND 1" \
    -d "fedex_registration[corporate_phone_number]=1-5145706987" \
    -d "fedex_registration[corporate_email_address]=payment@jjjjjound.com" \
    -d "fedex_registration[corporate_streets]=301-420 Sylvio Mantha" \
    -d "fedex_registration[corporate_city]=VAUDREUIL-DORION" \
    -d "fedex_registration[corporate_state]=PQ" \
    -d "fedex_registration[corporate_postal_code]=J7V0N4" \
    -d "fedex_registration[corporate_country_code]=CA" \
    -d "fedex_registration[corporate_job_title]=Warehouse Manager" \
    -d "fedex_registration[shipping_streets]=642 de Courcelle, unit 115" \
    -d "fedex_registration[shipping_city]=Montreal" \
    -d "fedex_registration[shipping_state]=QC" \
    -d "fedex_registration[shipping_postal_code]=H4C3C5" \
    -d "fedex_registration[shipping_country_code]=CA" \
    | json_pp
