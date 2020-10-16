#!/bin/bash

. /Users/jhammond/git/easypost/easypost-tools/.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments \
  -u "$DEVVM_TEST_API_KEY": \
  -d 'shipment[from_address][company]=EasyPost' \
  -d 'shipment[from_address][street1]=417 MONTGOMERY ST' \
  -d 'shipment[from_address][city]=SAN FRANCISCO' \
  -d 'shipment[from_address][state]=CA' \
  -d 'shipment[from_address][zip]=94104' \
  -d 'shipment[from_address][country]=US' \
  -d 'shipment[from_address][phone]=8573875756' \
  -d 'shipment[from_address][email]=dr_steve_brule@gmail.com' \
  -d 'shipment[to_address][name]=EasyPost' \
  -d 'shipment[to_address][street1]=417 MONTGOMERY ST' \
  -d 'shipment[to_address][city]=SAN FRANCISCO' \
  -d 'shipment[to_address][state]=CA' \
  -d 'shipment[to_address][zip]=94104' \
  -d 'shipment[to_address][country]=US' \
  -d 'shipment[to_address][phone]=4153334445' \
  -d 'shipment[to_address][email]=support@easypost.com' \
  -d 'shipment[parcel][length]=12' \
  -d 'shipment[parcel][width]=6' \
  -d 'shipment[parcel][height]=8' \
  -d 'shipment[parcel][weight]=12' \
  -d 'shipment[options][label_date]=2020-10-16T20:04:42Z' \
  -d "shipment[carrier_accounts][]=$DEVVM_AXLEHIREV3" \
  | json_pp


# FOR CANADAPOST, USE TEST


# company "FakePost"
# 1      name    "Chris P Kream"
# 562      street1 "1912 Woodford RD"
# 563      city    "Vienna"
# 564      state   "VA"
# 565      zip     "22182"
# 566      country "US"
# 567      phone   "610-937-4167"
# 568      company "FakePost"

#       name    "George Costanza"
# 130      street1 "1 E 16th St."
# 131      city    "Bronx"
# 132      state   "NY"
# 133      zip     "10451"
# 134      phone   "(610) 937-4167"
