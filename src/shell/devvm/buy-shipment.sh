#!/bin/bash

. ../../../.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_325ed7fa5c424f49b5e72869cab8fcf6/buy \
  -u "$DEVVM_TEST_API_KEY": \
  -d 'rate[id]=rate_dd6aa12fec324442a27e23b15ae77942' \
  | json_pp
