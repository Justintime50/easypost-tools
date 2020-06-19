curl -X POST https://api.easypost.com/v2/carrier_accounts \
  -u API_KEY_HERE: \
  -d "carrier_account[type]=RoyalMailAccount" \
  -d "carrier_account[description]=RoyalMailAccount" \
  -d "carrier_account[reference]=VALUE" \
  -d "carrier_account[credentials][account_number]=VALUE" \
  -d "carrier_account[credentials][username]=VALUE"
