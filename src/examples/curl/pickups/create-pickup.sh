curl -X POST https://api.easypost.com/v2/pickups \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "pickup": {
        "reference": "my-first-pickup",
        "min_datetime": "2014-10-20 17:10:00",
        "max_datetime": "2014-10-21 10:30:00",
        "shipment": "shp_...",
        "address": "adr_...",
        "is_account_address": "false",
        "instructions": "Special pickup instructions"
    }
}'
