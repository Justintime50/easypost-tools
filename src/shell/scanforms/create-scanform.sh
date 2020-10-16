#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

# Run curl to create manifest
curl -X POST https://api.easypost.com/v2/scan_forms \
  -u <YOUR_API_KEY>: \
  -d 'shipments[0][id]=shp_3f2abf8ed35a467183c8cdca1199b9ea' \
  -d 'shipments[1][id]=shp_...'
