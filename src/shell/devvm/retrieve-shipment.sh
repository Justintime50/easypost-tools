#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_a37857f9716341e5bf5809c7d59b8415 \
  -u "$DEVVM_PROD_API_KEY": \
  | json_pp
