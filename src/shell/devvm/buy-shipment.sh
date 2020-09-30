#!/bin/bash

. ../../../.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_ccced213f18149c4b0458abbcd9d509d/buy \
  -u "$DEVVM_PROD_API_KEY": \
  -d 'rate[id]=rate_c7d6fef5067647269cdcb83cb614fc22' \
  | json_pp
