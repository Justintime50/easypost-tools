curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u API_KEY_HERE: \
    -d "carrier_account[type]=UspsAccount" \
    -d "carrier_account[description]=USPS Account" \
    -d "carrier_account[credentials][company_name]=VALUE" \
    -d "carrier_account[credentials][address_street]=VALUE" \
    -d "carrier_account[credentials][address_city]=VALUE" \
    -d "carrier_account[credentials][address_state]=VALUE" \
    -d "carrier_account[credentials][address_zip]=VALUE" \
    -d "carrier_account[credentials][phone]=VALUE" \
    -d "carrier_account[credentials][email]=VALUE"
