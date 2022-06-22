curl -X POST https://api.easypost.com/v2/users \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "user": {
        "name": "Child Account Name"
    }
}'
