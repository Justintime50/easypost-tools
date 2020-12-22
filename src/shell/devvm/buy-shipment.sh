#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments/shp_8ee46c892c5e4603b150f6fc6a889a22/buy \
  -u "$DEVVM_PROD_API_KEY": \
  -d 'rate[id]=rate_7994c161af774448afbf4a42e25a29a7' \
  | json_pp

# IF USING CANADAPOST, USE TEST MODE
