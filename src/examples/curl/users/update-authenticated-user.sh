curl -X PATCH https://api.easypost.com/v2/users \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "user": {
        "recharge_threshold": "50.00"
    }
}'
