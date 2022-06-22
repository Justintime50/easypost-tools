curl -X POST https://api.easypost.com/v2/shipments \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "shipment": {
        "to_address": {
            "id": "adr_..."
        },
        "from_address": {
            "id": "adr_..."
        },
        "parcel": {
            "id": "prcl_..."
        },
        "options": {
            "address_validation_level": "0"
        }
    }
}'
