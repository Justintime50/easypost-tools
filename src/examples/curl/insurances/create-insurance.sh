curl -X POST https://api.easypost.com/v2/insurances \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "insurance": {
        "to_address": {
            "id": "adr_..."
        },
        "from_address": {
            "id": "adr_..."
        },
        "tracking_code": "9400110898825022579493",
        "carrier": "USPS",
        "reference": "insuranceRef1",
        "amount": "100.00"
    }
}'
