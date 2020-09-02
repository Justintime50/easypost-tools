#!/bin/bash

. ../../../.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_cad0af0fb4114d30b10d65d12165e13b \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
