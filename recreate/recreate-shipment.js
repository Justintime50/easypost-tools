const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Assign JSON data to variable
const data = (
//===============================================================//

    {
        "created_at": "2020-02-05T19:50:47Z",
        "is_return": false,
        "messages": [
          {
            "carrier": "UPS",
            "carrier_account_id": "ca_8e62d176138740bf936637dff7d0af42",
            "type": "rate_error",
            "message": "UPS did not return a valid response for rate account data."
          }
        ],
        "mode": "production",
        "options": {
          "label_format": "ZPL",
          "label_date": "2020-02-05T19:50:45+00:00",
          "incoterm": "EXW",
          "bill_third_party_account": "1Y750E",
          "bill_third_party_postal_code": "98108",
          "bill_third_party_country": "US",
          "machinable": true,
          "print_custom_1_code": "PO",
          "print_custom_1": "2GTG4CKV",
          "print_custom_2": "IF36900-SO2036040",
          "print_custom_3_code": "DP",
          "currency": "USD",
          "delivered_duty_paid": false,
          "print_custom": [
            {
              "name": "PO",
              "value": "2GTG4CKV",
              "barcode": null
            },
            {
              "name": null,
              "value": "IF36900-SO2036040",
              "barcode": null
            }
          ],
          "payment": {
            "type": "THIRD_PARTY",
            "account": "1Y750E",
            "postal_code": "98108",
            "country": "US"
          },
          "duty_payment": {
            "account": "1Y750E",
            "country": "US",
            "postal_code": "98108",
            "type": "THIRD_PARTY"
          },
          "date_advance": 0
        },
        "reference": "IF36900-SO2036040",
        "status": "unknown",
        "tracking_code": null,
        "updated_at": "2020-02-05T19:50:52Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": {
          "id": "cstinfo_93cf4168d0ee4e20bf40bc9ad0a8abe6",
          "object": "CustomsInfo",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "contents_explanation": null,
          "contents_type": "merchandise",
          "customs_certify": false,
          "customs_signer": null,
          "eel_pfc": null,
          "non_delivery_option": "return",
          "restriction_comments": null,
          "restriction_type": "none",
          "mode": "production",
          "declaration": null,
          "customs_items": [
            {
              "id": "cstitem_765ab6f388fc407c842b3c0864c604b8",
              "object": "CustomsItem",
              "created_at": "2020-02-05T19:50:47Z",
              "updated_at": "2020-02-05T19:50:47Z",
              "description": "E Quad Ext Scorecard holder E Quad or Nav Elite",
              "hs_tariff_number": "8716905060",
              "origin_country": "CN",
              "quantity": 1,
              "value": "0.0",
              "weight": 0,
              "code": null,
              "mode": "production",
              "manufacturer": null,
              "currency": "USD"
            }
          ]
        },
        "from_address": {
          "id": "adr_44af573e03a445f1b396ed13d738249f",
          "object": "Address",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "name": "dataping Dept.",
          "company": "Devant Ltd",
          "street1": "2203 Hwy 601 N",
          "street2": null,
          "city": "Pageland",
          "state": "SC",
          "zip": "29728",
          "country": "US",
          "phone": "7042899441",
          "email": "",
          "mode": "production",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "insurance": null,
        "order_id": null,
        "parcel": {
          "id": "prcl_9d56634f61484e90a6a5ff36d0ad503b",
          "object": "Parcel",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "length": 5,
          "width": 12,
          "height": 38,
          "predefined_package": null,
          "weight": 16,
          "mode": "production"
        },
        "postage_label": null,
        "refund_status": null,
        "scan_form": null,
        "selected_rate": null,
        "tracker": null,
        "to_address": {
          "id": "adr_fb9090434ef046af89750a8bdb88cdca",
          "object": "Address",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "name": null,
          "company": "Amazon.com.dedc LLC",
          "street1": "10240 Old Dowd Rd",
          "street2": null,
          "city": "Charlotte",
          "state": "NC",
          "zip": "28214-8082",
          "country": "US",
          "phone": "8042623000",
          "email": null,
          "mode": "production",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "usps_zone": 1,
        "return_address": {
          "id": "adr_44af573e03a445f1b396ed13d738249f",
          "object": "Address",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "name": "dataping Dept.",
          "company": "Devant Ltd",
          "street1": "2203 Hwy 601 N",
          "street2": null,
          "city": "Pageland",
          "state": "SC",
          "zip": "29728",
          "country": "US",
          "phone": "7042899441",
          "email": "",
          "mode": "production",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "buyer_address": {
          "id": "adr_fb9090434ef046af89750a8bdb88cdca",
          "object": "Address",
          "created_at": "2020-02-05T19:50:47Z",
          "updated_at": "2020-02-05T19:50:47Z",
          "name": null,
          "company": "Amazon.com.dedc LLC",
          "street1": "10240 Old Dowd Rd",
          "street2": null,
          "city": "Charlotte",
          "state": "NC",
          "zip": "28214-8082",
          "country": "US",
          "phone": "8042623000",
          "email": null,
          "mode": "production",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "object": "shipment",
        "rates": [],
        "forms": [],
        "fees": [],
        "id": "shp_927f7519269d4b8db460ea0d1cbeff01"
      }
);

//===============================================================//

// Get rid of all the things
delete data.to_address.id
delete data.to_address.mode
delete data.to_address.updated_at
delete data.to_address.created_at
delete data.to_address.carrier_facility
delete data.from_address.id
delete data.from_address.created_at
delete data.from_address.mode
delete data.from_address.updated_at
delete data.parcel.id
delete data.parcel.created_at
delete data.parcel.mode
delete data.parcel.updated_at
if (data.parcel.predefined_package === null) {
  delete data.parcel.predefined_package
};
if (data.customs_info) {
delete data.customs_info.id
delete data.customs_info.created_at
delete data.customs_info.mode
delete data.customs_info.updated_at
for (i = 0; i < data.customs_info.customs_items.length; i++) {
  delete data.customs_info.customs_items[i].id
  delete data.customs_info.customs_items[i].created_at
  delete data.customs_info.customs_items[i].mode
  delete data.customs_info.customs_items[i].updated_at
  if(data.customs_info.customs_items[i].currency === null) {
    delete data.customs_info.customs_items[i].currency
  }
 }
}

// Recreate the shipment
const shipment = new api.Shipment({ 
    to_address: data.to_address,
    from_address: data.from_address,
    parcel: data.parcel,
    options: data.options,
    customs_info: data.customs_info,
});

// Print the results to console
shipment.save().then(console.log);
