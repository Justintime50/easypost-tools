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
  "created_at": "2020-02-19T06:54:43Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "currency": "USD",
    "freight_charge": 0,
    "incoterm": "FCA",
    "delivered_duty_paid": true,
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": null,
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-19T06:54:43Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_49188c4ee6154fb69bd083f9e521d5cc",
    "object": "CustomsInfo",
    "created_at": "2020-02-19T06:54:43Z",
    "updated_at": "2020-02-19T06:54:43Z",
    "contents_explanation": "plastic case for mobile device",
    "contents_type": "merchandise",
    "customs_certify": true,
    "customs_signer": "Ronald Yeung",
    "eel_pfc": null,
    "non_delivery_option": "abandon",
    "restriction_comments": null,
    "restriction_type": "none",
    "mode": "production",
    "declaration": null,
    "customs_items": [
      {
        "id": "cstitem_bccc3d9d4b83443192e774d4e0096bd2",
        "object": "CustomsItem",
        "created_at": "2020-02-19T06:54:43Z",
        "updated_at": "2020-02-19T06:54:43Z",
        "description": "Plastic case for mobile device",
        "hs_tariff_number": "392690",
        "origin_country": "HK",
        "quantity": 1,
        "value": "40.0",
        "weight": 6.35,
        "code": null,
        "mode": "production",
        "manufacturer": null,
        "currency": null
      }
    ]
  },
  "from_address": {
    "id": "adr_292617c1aefc49dcaa76cf9ffdedcc03",
    "object": "Address",
    "created_at": "2020-02-19T06:54:41Z",
    "updated_at": "2020-02-19T06:54:41Z",
    "name": "Casetify",
    "company": null,
    "street1": "8/F Fun Tower, 35 Hung To Road",
    "street2": "Kwun Tong",
    "city": "Kowloon",
    "state": null,
    "zip": null,
    "country": "HK",
    "phone": "85239984906",
    "email": "hello@casetify.com",
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
    "id": "prcl_cc02a51b376a4cdcbdeef2959876abee",
    "object": "Parcel",
    "created_at": "2020-02-19T06:54:43Z",
    "updated_at": "2020-02-19T06:54:43Z",
    "length": 7.87,
    "width": 7.87,
    "height": 1.38,
    "predefined_package": null,
    "weight": 6.35,
    "mode": "production"
  },
  "postage_label": null,
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-02-19T06:54:46Z",
      "updated_at": "2020-02-19T06:54:46Z",
      "mode": "production",
      "service": "ExpressWorldwideNonDoc",
      "carrier": "DHLExpress",
      "rate": "286.54",
      "currency": "HKD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 5,
      "delivery_date": "2020-02-25T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 5,
      "shipment_id": "shp_e2f9b60921d74b798ecb8705b86baa4d",
      "carrier_account_id": "ca_0452709f0a104377a9a140cf7ed2cbb9",
      "id": "rate_ad54b83964034db8961ab55b2061a2ae"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-19T06:54:46Z",
      "updated_at": "2020-02-19T06:54:46Z",
      "mode": "production",
      "service": "ExpressEasyNonDoc",
      "carrier": "DHLExpress",
      "rate": "892.00",
      "currency": "HKD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 5,
      "delivery_date": "2020-02-25T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 5,
      "shipment_id": "shp_e2f9b60921d74b798ecb8705b86baa4d",
      "carrier_account_id": "ca_0452709f0a104377a9a140cf7ed2cbb9",
      "id": "rate_9b3c5da4d8424577ae48eaa1389e379f"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-19T06:54:46Z",
      "updated_at": "2020-02-19T06:54:46Z",
      "mode": "production",
      "service": "MedicalExpressNonDoc",
      "carrier": "DHLExpress",
      "rate": "1898.81",
      "currency": "HKD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 5,
      "delivery_date": "2020-02-25T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 5,
      "shipment_id": "shp_e2f9b60921d74b798ecb8705b86baa4d",
      "carrier_account_id": "ca_0452709f0a104377a9a140cf7ed2cbb9",
      "id": "rate_9b82cb4c47784e8fa268f9a76648e98f"
    }
  ],
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_c2076136378d46a89647849c2e7cd960",
    "object": "Address",
    "created_at": "2020-02-19T06:54:39Z",
    "updated_at": "2020-02-19T06:54:39Z",
    "name": "Teona Mango (#3134269)",
    "company": null,
    "street1": "Milton Manaki 21",
    "street2": null,
    "city": "Bitola",
    "state": "North Macedonia",
    "zip": "7000",
    "country": "MK",
    "phone": "38971207070",
    "email": "katie@casetagram.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_292617c1aefc49dcaa76cf9ffdedcc03",
    "object": "Address",
    "created_at": "2020-02-19T06:54:41Z",
    "updated_at": "2020-02-19T06:54:41Z",
    "name": "Casetify",
    "company": null,
    "street1": "8/F Fun Tower, 35 Hung To Road",
    "street2": "Kwun Tong",
    "city": "Kowloon",
    "state": null,
    "zip": null,
    "country": "HK",
    "phone": "85239984906",
    "email": "hello@casetify.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_c2076136378d46a89647849c2e7cd960",
    "object": "Address",
    "created_at": "2020-02-19T06:54:39Z",
    "updated_at": "2020-02-19T06:54:39Z",
    "name": "Teona Mango (#3134269)",
    "company": null,
    "street1": "Milton Manaki 21",
    "street2": null,
    "city": "Bitola",
    "state": "North Macedonia",
    "zip": "7000",
    "country": "MK",
    "phone": "38971207070",
    "email": "katie@casetagram.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "forms": [],
  "fees": [],
  "id": "shp_e2f9b60921d74b798ecb8705b86baa4d",
  "object": "Shipment"
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
