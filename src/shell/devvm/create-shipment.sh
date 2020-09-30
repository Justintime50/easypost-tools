#!/bin/bash

. ../../../.env

curl -X POST http://oregon1.jhammond.devvm.easypo.net:5000/v2/shipments \
  -u "$DEVVM_PROD_API_KEY": \
  -d 'shipment[to_address][name]=Dr. Steve Brule' \
  -d 'shipment[to_address][street1]=1725 E Broadway' \
  -d 'shipment[to_address][city]=Vancouver' \
  -d 'shipment[to_address][state]=BC' \
  -d 'shipment[to_address][zip]=V5N 1V9' \
  -d 'shipment[to_address][country]=CA' \
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
  -d 'shipment[parcel][length]=12' \
  -d 'shipment[parcel][width]=6' \
  -d 'shipment[parcel][height]=8' \
  -d 'shipment[parcel][weight]=12' \
  -d 'shipment[customs_info][customs_certify]=true' \
  -d 'shipment[customs_info][customs_signer]=Steve Brule' \
  -d 'shipment[customs_info][contents_type]=merchandise' \
  -d 'shipment[customs_info][contents_explanation]=' \
  -d 'shipment[customs_info][restriction_type]=none' \
  -d 'shipment[customs_info][eel_pfc]=NOEEI 30.37(a)' \
  -d 'shipment[customs_info][customs_items][0][description]=Sweet shirts' \
  -d 'shipment[customs_info][customs_items][0][quantity]=2' \
  -d 'shipment[customs_info][customs_items][0][value]=23' \
  -d 'shipment[customs_info][customs_items][0][weight]=11' \
  -d 'shipment[customs_info][customs_items][0][hs_tariff_number]=654321' \
  -d 'shipment[customs_info][customs_items][0][origin_country]=US' \
  -d "shipment[carrier_accounts][]=$DEVVM_DHL_EXPRESS" \
  | json_pp


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
