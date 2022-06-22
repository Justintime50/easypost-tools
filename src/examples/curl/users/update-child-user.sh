curl -X PATCH https://api.easypost.com/v2/users/user_... \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "user": {
        "name": "Test Child"
    }
}'
