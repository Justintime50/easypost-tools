#!/bin/bash

. ../../../.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers/trk_5ae5425171664f8e9cccf50f1eff8652 \
  -u "$DEVVM_PROD_API_KEY": \
  | json_pp
