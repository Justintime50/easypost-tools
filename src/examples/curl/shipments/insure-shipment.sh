curl -X GET https://api.easypost.com/v2/shipments/shp_.../insure \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "amount": "200"
}'
