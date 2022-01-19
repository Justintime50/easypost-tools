#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST https://api.easypost.com/v2/shipments \
    -u "$EASYPOST_TEST_API_KEY": \
    -d "address[street1]=417 MONTGOMERY ST" \
    -d "address[street2]=FLOOR 5" \
    -d "address[city]=SAN FRANCISCO" \
    -d "address[state]=CA" \
    -d "address[zip]=94104" \
    -d "address[country]=US" \
    -d "address[company]=EasyPost" \
    -d "address[phone]=415-123-4567" |
    json_pp
