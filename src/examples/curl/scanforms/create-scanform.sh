curl -X POST https://api.easypost.com/v2/scan_forms \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "shipments": [
        {
            "id": "shp_..."
        },
        {
            "id": "shp_..."
        }
    ]
}'
