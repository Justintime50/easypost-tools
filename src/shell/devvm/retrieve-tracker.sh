#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers/trk_3319a51710c944e986540c77f2d54500 \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
