curl -X POST https://api.easypost.com/v2/addresses/create_and_verify \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "address": {
        "street1": "417 Montgomery Street",
        "street2": "FL 5",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94104",
        "country": "US",
        "company": "EasyPost",
        "phone": "415-123-4567"
    }
}'
