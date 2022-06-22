curl -X PATCH https://api.easypost.com/v2/users/user_.../brand \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "brand": {
        "background_color": "#FFFFFF",
        "color": "#303F9F",
        "logo": "data:image/png;base64,iVBORw0K...",
        "logo_href": "https://easypost.com",
        "ad": "null",
        "ad_href": "null",
        "theme": "theme1"
    }
}'
