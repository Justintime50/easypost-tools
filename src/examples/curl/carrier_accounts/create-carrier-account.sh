curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "carrier_account": {
        "type": "UpsAccount",
        "description": "NY Location UPS Account",
        "reference": "my-reference",
        "credentials": {
            "account_number": "A1A1A1",
            "user_id": "USERID",
            "password": "PASSWORD",
            "access_license_number": "ALN"
        }
    }
}'
