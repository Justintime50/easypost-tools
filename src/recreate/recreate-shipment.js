const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Assign JSON data to variable
const data = (

// ENTER JSON DATA BELOW
//===============================================================//

{
  "created_at": "2020-02-21T04:09:12Z",
  "is_return": true,
  "messages": [],
  "mode": "production",
  "options": {
    "label_format": "PDF",
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": null,
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-21T04:09:12Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_82f1c738754243d2b40c88c0343a2791",
    "object": "Address",
    "created_at": "2020-02-21T04:09:12Z",
    "updated_at": "2020-02-21T04:09:12Z",
    "name": "Sezai Cankirli",
    "company": "Book To Cash",
    "street1": "11756 S HARRELLS FERRY RD",
    "street2": "SUITE C",
    "city": "BATON ROUGE",
    "state": "LA",
    "zip": "70816",
    "country": "US",
    "phone": "6019422302",
    "email": "altininternet@hotmail.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_1881a07fb5bb46a7b71bf830c6f9482a",
    "object": "Parcel",
    "created_at": "2020-02-21T04:09:12Z",
    "updated_at": "2020-02-21T04:09:12Z",
    "length": null,
    "width": null,
    "height": null,
    "predefined_package": null,
    "weight": 10.38,
    "mode": "production"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_96b40845bfb54cc08559ff2d5196f7a5",
    "object": "Address",
    "created_at": "2020-02-21T04:09:12Z",
    "updated_at": "2020-02-21T04:09:12Z",
    "name": "Sezai Cankirli",
    "company": null,
    "street1": "11768 S Harrells Ferry Rd",
    "street2": null,
    "city": "Baton Rouge",
    "state": "LA",
    "zip": "70816",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 1,
  "return_address": {
    "id": "adr_82f1c738754243d2b40c88c0343a2791",
    "object": "Address",
    "created_at": "2020-02-21T04:09:12Z",
    "updated_at": "2020-02-21T04:09:12Z",
    "name": "Sezai Cankirli",
    "company": "Book To Cash",
    "street1": "11756 S HARRELLS FERRY RD",
    "street2": "SUITE C",
    "city": "BATON ROUGE",
    "state": "LA",
    "zip": "70816",
    "country": "US",
    "phone": "6019422302",
    "email": "altininternet@hotmail.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_96b40845bfb54cc08559ff2d5196f7a5",
    "object": "Address",
    "created_at": "2020-02-21T04:09:12Z",
    "updated_at": "2020-02-21T04:09:12Z",
    "name": "Sezai Cankirli",
    "company": null,
    "street1": "11768 S Harrells Ferry Rd",
    "street2": null,
    "city": "Baton Rouge",
    "state": "LA",
    "zip": "70816",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "FIRST_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "64.68",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "64.68",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": "2020-02-24T08:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_4a307987fa1249729d9144e006cc2d0d"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "PRIORITY_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "20.24",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "33.03",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": "2020-02-24T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_9527a66dc9ff491c91a4e42e935c94d2"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "STANDARD_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "18.92",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "30.84",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": "2020-02-24T15:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_a266bdd4501d408ea1813e67fa4a11aa"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "FEDEX_GROUND",
      "carrier": "FedEx",
      "rate": "9.81",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "9.81",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-02-24T23:59:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_12f6a25f955f4157abb6559761862b44"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "FEDEX_2_DAY_AM",
      "carrier": "FedEx",
      "rate": "16.00",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "22.65",
      "list_currency": "USD",
      "delivery_days": 4,
      "delivery_date": "2020-02-25T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 4,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_db9422d8496a4d68920f388621ec597d"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-21T04:09:13Z",
      "updated_at": "2020-02-21T04:09:13Z",
      "mode": "production",
      "service": "FEDEX_2_DAY",
      "carrier": "FedEx",
      "rate": "15.46",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "21.21",
      "list_currency": "USD",
      "delivery_days": 4,
      "delivery_date": "2020-02-25T16:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 4,
      "shipment_id": "shp_67e2be4df00d49cf9ca3851e10493fcd",
      "carrier_account_id": "ca_2470024cbf874825adb505d1c25f15ba",
      "id": "rate_0d0c9a44cc994680924cb120103ac56f"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_67e2be4df00d49cf9ca3851e10493fcd"
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
  if(data.customs_info.customs_items[i].currency === null) {
    delete data.customs_info.customs_items[i].currency
  }
 }
}

/*
const customsInfo = new api.CustomsInfo({
  eel_pfc: 'NOEEI 30.37(a)',
  customs_certify: true,
  customs_signer: 'Steve Brule',
  contents_type: 'merchandise',
  contents_explanation: '',
  restriction_type: 'none',
  restriction_comments: '',
  non_delivery_option: 'abandon',

  /* customs_items can be passed in as instances or ids.
  *  if the item does not have an id, it will be created. *
  customs_items: [
    new api.CustomsItem({
    'description': 'Sweet shirts',
    'quantity': 2,
    'weight': 11,
    'value': 23,
    'hs_tariff_number': '654321',
    'origin_country': 'US'
  })],
});
*/

//customsInfo.save().catch(console.log);

// Recreate the shipment
const shipment = new api.Shipment({ 
    to_address: data.to_address,
    from_address: data.from_address,
    parcel: data.parcel,
    options: data.options,
    customs_info: data.customs_info,
    carrier_accounts: [process.env.FEDEX],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
