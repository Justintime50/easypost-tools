curl -X POST https://api.easypost.com/v2/webhooks \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "webhook": {
        "url": "example.com"
    }
}'
