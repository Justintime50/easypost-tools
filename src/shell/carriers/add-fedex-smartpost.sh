curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexSmartpostAccount' \
-d 'carrier_account[description]=FedEx SmartPost Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][hub_id]=HUB_ID' \
-d 'carrier_account[credentials][meter_number]=METER_NUMBER' \
# -d 'carrier_account[credentials][key]=KEY' \
# -d 'carrier_account[credentials][password]=PASSWORD' \
# -d 'carrier_account[creation_fields][credential_information]=CREDENTIAL_INFORMATION' \
# -d 'carrier_account[creation_fields][company_information]=COMPANY_INFORMATION' \
# -d 'carrier_account[creation_fields][address_information]=ADDRESS_INFORMATION'
