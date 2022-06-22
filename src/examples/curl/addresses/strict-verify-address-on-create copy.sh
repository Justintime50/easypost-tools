curl -X POST https://api.easypost.com/v2/addresses \
-u $EASYPOST_API_KEY: \
-H "Content-Type: application/json" \
-d '{
    "address": {
        "street1": "417 MONTGOMERY ST",
        "street2": "FLOOR 5",
        "city": "SAN FRANCISCO",
        "state": "CA",
        "zip": "94104",
        "country": "US",
        "company": "EasyPost",
        "phone": "415-123-4567"
    },
    "verify_strict": ["delivery"]
}'
