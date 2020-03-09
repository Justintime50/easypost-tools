#!/bin/bash

source ../../.env

curl -X POST https://api.easypost.com/v2/shipments \
    -u "$EASYPOST_PROD_API_KEY": \
    -d "shipment[to_address][name]:Honeywell ZBD CA" \
    -d "shipment[to_address][street1]:TaigaNova Crescent 380" \
    -d "shipment[to_address][state]:AB" \
    -d "shipment[to_address][zip]:T9K 0T4" \
    -d "shipment[to_address][country]:Canada" \
    -d "shipment[to_address][city]:Fort McMurray" \
    -d "shipment[to_address][email]:Vincent.Munro@Honeywell.com" \
    -d "shipment[to_address][phone]:6465787687" \
    -d "shipment[from_address][name]:Mobilerecell" \
    -d "shipment[from_address][street1]:10150 Lantern Rd" \
    -d "shipment[from_address][state]:IN" \
    -d "shipment[from_address][zip]:46037" \
    -d "shipment[from_address][country]:US" \
    -d "shipment[from_address][city]:Fishers" \
    -d "shipment[from_address][phone]:6465787687" \
    -d "shipment[parcel][length]=20.2" \
    -d "shipment[parcel][width]=10.9" \
    -d "shipment[parcel][height]=5" \
    -d "shipment[parcel][weight]=65.9" \
    -d "shipment[customs_info][customs_item][description]:Letter" \
    -d "shipment[customs_info][customs_item][quantity]:1" \
    -d "shipment[customs_info][customs_item][weight]:6" \
    -d "shipment[customs_info][customs_item][value]:11" \
    -d "shipment[customs_info][customs_item][hs_tariff_number]:123456" \
    -d "shipment[customs_info][customs_item][origin_country]:US" \
    -d "shipment[customs_info][contents_type]:other" \
    -d "shipment[customs_info][customs_certify]:false" \
    -d "shipment[customs_info][non_delivery_option]:return" \
    | json_pp
    # -d "shipment[selected_rate][carrier]:FedEx" \
    # -d "shipment[selected_rate][service]:FEDEX_GROUND" \
    # -d "shipment[carrier_accounts]:['ca_3bd616120603457fbed9deb1e425bbdc']" \
