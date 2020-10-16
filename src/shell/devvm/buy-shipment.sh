#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_49ee2c9df67040d5827316546dfe4183/buy \
  -u "$DEVVM_TEST_API_KEY": \
  -d 'rate[id]=rate_26aaacc8f7a247dc91bcd3c636dd8f73' \
  | json_pp

# IF USING CANADAPOST, USE TEST MODE
