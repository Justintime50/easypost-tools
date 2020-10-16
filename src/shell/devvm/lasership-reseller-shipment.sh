#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments \
  -u "$DEVVM_TEST_API_KEY": \
  -d 'shipment[to_address][name]=George Costanza' \
  -d 'shipment[to_address][company]=Fake Company' \
  -d 'shipment[to_address][street1]=1 E 16th St.' \
  -d 'shipment[to_address][city]=Bronx' \
  -d 'shipment[to_address][state]=NY' \
  -d 'shipment[to_address][zip]=10451' \
  -d 'shipment[to_address][country]=US' \
  -d 'shipment[to_address][phone]=(610) 937-4167' \
  -d 'shipment[from_address][residential]=false' \
  -d 'shipment[from_address][name]=Chris P Kream' \
  -d 'shipment[from_address][street1]=1912 Woodford RD' \
  -d 'shipment[from_address][city]=Vienna' \
  -d 'shipment[from_address][state]=VA' \
  -d 'shipment[from_address][zip]=22182' \
  -d 'shipment[from_address][country]=US' \
  -d 'shipment[from_address][phone]=610-937-4167' \
  -d 'shipment[from_address][company]=FakePost' \
  -d 'shipment[parcel][length]=12' \
  -d 'shipment[parcel][width]=6' \
  -d 'shipment[parcel][height]=8' \
  -d 'shipment[parcel][weight]=12' \
  -d 'shipment[options][label_format]=ZPL' \
  -d 'shipment[options][print_custom_3]=123' \
  -d 'shipment[options][print_custom][0][name]=largenumber' \
  -d 'shipment[options][print_custom][0][value]=123' \
  -d 'shipment[options][dropoff_max_datetime]=2020-08-25T22:00:00' \
  -d "shipment[carrier_accounts][]=$DEVVM_LASERSHIPV2" \
  | json_pp
