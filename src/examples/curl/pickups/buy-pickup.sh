curl -X POST https://api.easypost.com/v2/pickups/pickup_.../buy \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "carrier": "UPS",
    "service": "Same-Day Pickup"
}'
