curl -X PATCH https://api.easypost.com/v2/carrier_accounts/ca_... \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "carrier_account": {
        "description": "FL Location UPS Account",
        "credentials": {
            "account_number": "B2B2B2",
        }
    }
}'
