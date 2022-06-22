curl -X POST https://api.easypost.com/v2/batches/batch_.../label \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "file_format": "epl2"
}'
