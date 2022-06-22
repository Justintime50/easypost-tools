curl -X POST https://api.easypost.com/v2/credit_cards/card_.../charges \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "amount": "20"
}'
