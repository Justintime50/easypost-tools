curl -X POST https://api.easypost.com/v2/orders/order_.../buy \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "carrier": "FedEx",
    "service": "FEDEX_GROUND"
}'
