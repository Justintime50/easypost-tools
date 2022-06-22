curl -X POST https://api.easypost.com/v2/parcels \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "parcel": {
        "length": "20.2",
        "width": "10.9",
        "height": "5",
        "weight": "65.9"
    }
}'
