curl -X POST https://api.easypost.com/v2/trackers \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "tracker": {
        "tracking_code": "9400110898825022579493",
        "carrier": "USPS"
    }
}'
