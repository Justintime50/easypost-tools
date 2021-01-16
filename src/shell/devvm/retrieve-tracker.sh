#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers/trk_0ebc279012cc41ddb3ef119e6e39c49a \
  -u "$DEVVM_PROD_API_KEY": \
  | json_pp
