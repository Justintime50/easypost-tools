#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST https://api.easypost.com/v2/scan_forms \
    -u "$EASYPOST_TEST_API_KEY": \
    -d 'shipments[0][id]=shp_123...' \
    -d 'shipments[1][id]=shp_123...'
