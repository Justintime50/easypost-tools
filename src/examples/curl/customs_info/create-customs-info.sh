curl -X POST https://api.easypost.com/v2/customs_infos \
-u $EASYPOST_API_KEY: \
-H 'Content-Type: application/json' \
-d '{
    "customs_info": {
        "customs_certify": "true",
        "customs_signer": "Steve Brule",
        "contents_type": "merchandise",
        "contents_explanation": "",
        "restriction_type": "none",
        "eel_pfc": "NOEEI 30.37(a)",
        "customs_items": [
            {
                "description": "T-shirt",
                "quantity": "1",
                "weight": "5",
                "value": "10",
                "hs_tariff_number": "123456",
                "origin_country": "US"
            }
        ]
    }
}'
