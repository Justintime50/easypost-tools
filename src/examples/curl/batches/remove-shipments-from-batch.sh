curl -X POST https://api.easypost.com/v2/batches/batch_.../remove_shipments \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "batch": {
        "shipments": [
            {
                "id": "shp_..."
            }
        ]
    }
}'
