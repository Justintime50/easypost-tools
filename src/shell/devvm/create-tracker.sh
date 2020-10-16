#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST localhost:5051/v1/tracking \
  -u "$DEVVM_TEST_API_KEY": \
  -d 'tracking_code=LT023147905NL'
