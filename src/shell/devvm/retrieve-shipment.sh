#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_a81e7d4cb4ba4e4da216250ccb4566ff \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
