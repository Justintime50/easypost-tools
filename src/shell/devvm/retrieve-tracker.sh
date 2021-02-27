#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers/trk_c766fa972b034622b40a7fcc19c23d3e \
  -u "$DEVVM_PROD_API_KEY": \
  | json_pp
