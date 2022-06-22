curl -X POST https://api.easypost.com/v2/orders \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "order": {
        "to_address": {
            "id": "adr_..."
        },
        "from_address": {
            "id": "adr_..."
        },
        "shipments": [
            {
                "parcel": {
                    "weight": "10.2"
                }
            },
            {
                "parcel": {
                    "predefined_package": "FedExBox",
                    "weight": "17.5"
                }
            }
        ]
    }
}'
