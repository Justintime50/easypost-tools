#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_c7ef2e86325e490691af9ef7cfa54404 \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
