const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

// Assign JSON data to variable
const data = (

  // ENTER JSON DATA BELOW
  //===============================================================//

  {
    "created_at": "2021-01-13T02:25:58Z",
    "is_return": false,
    "messages": [],
    "mode": "test",
    "options": {
      "currency": "USD",
      "payment": {
        "type": "SENDER"
      },
      "date_advance": 0,
      "label_date": "2021-01-13T02:25:58+00:00"
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": null,
    "updated_at": "2021-01-13T02:25:58Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": {
      "id": "cstinfo_34b334c3b1df4f0387c537681bb4dcae",
      "object": "CustomsInfo",
      "created_at": "2021-01-13T02:25:58Z",
      "updated_at": "2021-01-13T02:25:58Z",
      "contents_explanation": "Merchandise",
      "contents_type": "merchandise",
      "customs_certify": true,
      "customs_signer": "AP",
      "eel_pfc": "NOEEI30.37(a)",
      "non_delivery_option": "return",
      "restriction_comments": "",
      "restriction_type": "none",
      "mode": "test",
      "declaration": "",
      "customs_items": [
        {
          "id": "cstitem_20be9ec5320e48958867d1bc4ede0582",
          "object": "CustomsItem",
          "created_at": "2021-01-13T02:25:58Z",
          "updated_at": "2021-01-13T02:25:58Z",
          "description": "Virginity Rocks Blah Blah",
          "hs_tariff_number": "6111.20.3000",
          "origin_country": "US",
          "quantity": 1,
          "value": "45.0",
          "weight": 16,
          "code": "DUN-DUN-DD050-0W-HD-",
          "mode": "test",
          "manufacturer": "",
          "currency": null,
          "eccn": null
        }
      ]
    },
    "from_address": {
      "id": "adr_cef9bb6709994098bb7f9ee6456f628f",
      "object": "Address",
      "created_at": "2021-01-13T02:25:58+00:00",
      "updated_at": "2021-01-13T02:25:58+00:00",
      "name": "ERIC NIELSEN",
      "company": "EASYPOST",
      "street1": "5081 N MARBLE FOX WAY",
      "street2": "",
      "city": "LEHI",
      "state": "UT",
      "zip": "84043-6157",
      "country": "US",
      "phone": "8014720806",
      "email": "ERIC.NIELSEN@EASYPOST.COM",
      "mode": "test",
      "carrier_facility": "",
      "residential": true,
      "federal_tax_id": "",
      "state_tax_id": "",
      "verifications": {}
    },
    "insurance": null,
    "order_id": null,
    "parcel": {
      "id": "prcl_e0d35b5d74214be4882ec89ef54e8e52",
      "object": "Parcel",
      "created_at": "2021-01-13T02:25:58Z",
      "updated_at": "2021-01-13T02:25:58Z",
      "length": 12,
      "width": 9,
      "height": 6,
      "predefined_package": null,
      "weight": 16,
      "mode": "test"
    },
    "postage_label": null,
    "refund_status": null,
    "scan_form": null,
    "selected_rate": null,
    "tracker": null,
    "to_address": {
      "id": "adr_11579a0e97f644aa81f38bd334cc8a0e",
      "object": "Address",
      "created_at": "2021-01-13T02:25:58+00:00",
      "updated_at": "2021-01-13T02:25:58+00:00",
      "name": "The Dude",
      "company": "",
      "street1": "Summit House",
      "street2": "Athey St",
      "city": "Macclesfield",
      "state": "Cheshire",
      "zip": "SK116QU",
      "country": "GB",
      "phone": "8014720806",
      "email": "ERIC.NIELSEN@EASYPOST.COM",
      "mode": "test",
      "carrier_facility": "",
      "residential": false,
      "federal_tax_id": "",
      "state_tax_id": "",
      "verifications": {}
    },
    "usps_zone": null,
    "return_address": {
      "id": "adr_cef9bb6709994098bb7f9ee6456f628f",
      "object": "Address",
      "created_at": "2021-01-13T02:25:58+00:00",
      "updated_at": "2021-01-13T02:25:58+00:00",
      "name": "ERIC NIELSEN",
      "company": "EASYPOST",
      "street1": "5081 N MARBLE FOX WAY",
      "street2": "",
      "city": "LEHI",
      "state": "UT",
      "zip": "84043-6157",
      "country": "US",
      "phone": "8014720806",
      "email": "ERIC.NIELSEN@EASYPOST.COM",
      "mode": "test",
      "carrier_facility": "",
      "residential": true,
      "federal_tax_id": "",
      "state_tax_id": "",
      "verifications": {}
    },
    "buyer_address": {
      "id": "adr_11579a0e97f644aa81f38bd334cc8a0e",
      "object": "Address",
      "created_at": "2021-01-13T02:25:58+00:00",
      "updated_at": "2021-01-13T02:25:58+00:00",
      "name": "The Dude",
      "company": "",
      "street1": "Summit House",
      "street2": "Athey St",
      "city": "Macclesfield",
      "state": "Cheshire",
      "zip": "SK116QU",
      "country": "GB",
      "phone": "8014720806",
      "email": "ERIC.NIELSEN@EASYPOST.COM",
      "mode": "test",
      "carrier_facility": "",
      "residential": false,
      "federal_tax_id": "",
      "state_tax_id": "",
      "verifications": {}
    },
    "object": "Shipment",
    "rates": [
      {
        "object": "Rate",
        "created_at": "2021-01-13T02:26:03Z",
        "updated_at": "2021-01-13T02:26:03Z",
        "mode": "test",
        "service": "DHLParcelInternationalDirect",
        "carrier": "DhlEcs",
        "rate": "10.24",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": null,
        "est_delivery_days": null,
        "shipment_id": "shp_8097e376b45043c492bb2ff0a9543670",
        "carrier_account_id": "ca_bf0d4e661dfc4403b26b291481607911",
        "id": "rate_126e57a9ca9c4989a352b592f5e9ca88"
      }
    ],
    "forms": [],
    "fees": [],
    "id": "shp_8097e376b45043c492bb2ff0a9543670"
  }

  //===============================================================//
);

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
    if (data.customs_info.customs_items[i].currency === null) {
      delete data.customs_info.customs_items[i].currency
    }
  }
}
delete data.batch_id
delete data.batch_message
delete data.batch_status

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  from_address: data.from_address,
  parcel: data.parcel,
  options: data.options,
  customs_info: data.customs_info,
  // service: "Xpresspost",
  // carrier: "CanadaPost",
  // label_format: "PDF",
  carrier_accounts: [process.env.DHL_ECS], // If CANADA_POST, use TEST!
  reference: 'test-reference'
  // is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
