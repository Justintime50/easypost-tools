curl -X POST https://api.easypost.com/v2/reports/payment_log \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "start_date": "2016-10-01",
    "end_date": "2016-10-31"
}'
