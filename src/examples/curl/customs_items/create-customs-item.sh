curl -X POST https://api.easypost.com/v2/customs_items \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "customs_item": {
        "description": "T-shirt",
        "quantity": "1",
        "weight": "5",
        "value": "10",
        "hs_tariff_number": "123456",
        "origin_country": "US"
    }
}'
