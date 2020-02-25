const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Assign JSON data to variable
const data = (

// ENTER JSON DATA BELOW
//===============================================================//

{
  "created_at": "2020-02-24T18:40:40Z",
  "is_return": false,
  "messages": [
    {
      "type": "rate_error",
      "carrier": "USPS",
      "message": "to postal code: zipcode must be all numeric"
    },
    {
      "carrier": "FedExSmartPost",
      "carrier_account_id": "ca_c5f2fc3439a044ac9600cb533ac51f4b",
      "type": "rate_error",
      "message": "FedEx returned error: Destination postal code missing or invalid. "
    },
    {
      "carrier": "FedEx",
      "carrier_account_id": "ca_411e496342fa427d999c6809558e875b",
      "type": "rate_error",
      "message": "FedEx returned error: Destination postal code missing or invalid. "
    }
  ],
  "mode": "production",
  "options": {
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": "00178675",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-24T18:40:41Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_5fb25df6989344e3ad09f37b0522dce5",
    "object": "Address",
    "created_at": "2020-02-24T18:40:39Z",
    "updated_at": "2020-02-24T18:40:39Z",
    "name": null,
    "company": "NatureBox",
    "street1": "23 Wheat St.",
    "street2": "",
    "city": "Batesville",
    "state": "IN",
    "zip": "47006",
    "country": "US",
    "phone": "18886136998",
    "email": null,
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
    "id": "prcl_3567753fdbb2440498a0c03354b79012",
    "object": "Parcel",
    "created_at": "2020-02-24T18:40:40Z",
    "updated_at": "2020-02-24T18:40:40Z",
    "length": 14,
    "width": 8.7,
    "height": 3,
    "predefined_package": null,
    "weight": 22.08,
    "mode": "production"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_c8532aeaed2d4d93a44d3e657770a992",
    "object": "Address",
    "created_at": "2020-02-24T18:40:39Z",
    "updated_at": "2020-02-24T18:40:39Z",
    "name": "Nikki West",
    "company": "Nurx",
    "street1": "1125 MISSION ST # 2",
    "street2": "",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94103 ",
    "country": "US",
    "phone": "4156045667",
    "email": "nikki@nurx.co",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 8,
  "return_address": {
    "id": "adr_fe4f3eb6c68f47828633f27be7438942",
    "object": "Address",
    "created_at": "2020-02-24T18:40:40Z",
    "updated_at": "2020-02-24T18:40:40Z",
    "name": null,
    "company": "NatureBox",
    "street1": "1661 Broadway St.",
    "street2": null,
    "city": "Redwood City",
    "state": "CA",
    "zip": "94063",
    "country": "US",
    "phone": "18886136998",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_c8532aeaed2d4d93a44d3e657770a992",
    "object": "Address",
    "created_at": "2020-02-24T18:40:39Z",
    "updated_at": "2020-02-24T18:40:39Z",
    "name": "Nikki West",
    "company": "Nurx",
    "street1": "1125 MISSION ST # 2",
    "street2": "",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94103 ",
    "country": "US",
    "phone": "4156045667",
    "email": "nikki@nurx.co",
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
      "created_at": "2020-02-24T18:40:42Z",
      "updated_at": "2020-02-24T18:40:42Z",
      "mode": "production",
      "service": "Expedited",
      "carrier": "EasyPost",
      "rate": "8.48",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_4b8ddacf548243e99a8c31e2addb0a63",
      "carrier_account_id": "ca_8705d1ff18354fb0966a2bebd2a036ec",
      "id": "rate_6a14a5ccdfb54965988abc79372c5a22"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-24T18:40:42Z",
      "updated_at": "2020-02-24T18:40:42Z",
      "mode": "production",
      "service": "Standard",
      "carrier": "EasyPost",
      "rate": "7.67",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_4b8ddacf548243e99a8c31e2addb0a63",
      "carrier_account_id": "ca_8705d1ff18354fb0966a2bebd2a036ec",
      "id": "rate_58b731e61b0f4e82b74c18ca2c4ea930"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_4b8ddacf548243e99a8c31e2addb0a63"
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
    carrier_accounts: [process.env.DHL_EXPRESS],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
