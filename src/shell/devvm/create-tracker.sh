#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/trackers \
  -u "$DEVVM_PROD_API_KEY": \
  -d 'tracker[tracking_code]=nzwgnfef5tyuvy6v' \
  -d 'tracker[carrier]=AxlehireV3' \
  | json_pp
