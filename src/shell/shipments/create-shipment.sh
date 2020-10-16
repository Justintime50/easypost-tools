#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST https://api.easypost.com/v2/shipments \
  -u "$EASYPOST_PROD_API_KEY": \
  -d 'shipment[to_address][name]=Dr. Steve Brule' \
  -d 'shipment[to_address][street1]=179 N Harbor Dr' \
  -d 'shipment[to_address][city]=Redondo Beach' \
  -d 'shipment[to_address][state]=CA' \
  -d 'shipment[to_address][zip]=90277' \
  -d 'shipment[to_address][country]=US' \
  -d 'shipment[to_address][phone]=8573875756' \
  -d 'shipment[to_address][email]=dr_steve_brule@gmail.com' \
  -d 'shipment[from_address][name]=EasyPost' \
  -d 'shipment[from_address][street1]=417 Montgomery Street' \
  -d 'shipment[from_address][street2]=5th Floor' \
  -d 'shipment[from_address][city]=San Francisco' \
  -d 'shipment[from_address][state]=CA' \
  -d 'shipment[from_address][zip]=94104' \
  -d 'shipment[from_address][country]=US' \
  -d 'shipment[from_address][phone]=4153334445' \
  -d 'shipment[from_address][email]=support@easypost.com' \
  -d 'shipment[parcel][length]=20.2' \
  -d 'shipment[parcel][width]=10.9' \
  -d 'shipment[parcel][height]=5' \
  -d 'shipment[parcel][weight]=65.9' \
  | json_pp 
