#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X GET http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers/trk_0ea422c248c24a30ae7a0bb7affe108d \
  -u "$DEVVM_TEST_API_KEY": \
  | json_pp
