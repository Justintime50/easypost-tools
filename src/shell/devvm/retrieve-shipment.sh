#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_04865c3f921d401bb63de7b3812e9e0b \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
