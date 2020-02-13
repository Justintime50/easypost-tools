const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Assign JSON data to variable
const data = (

// ENTER JSON DATA BELOW
//===============================================================//

{
  "created_at": "2020-02-13T19:05:37Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": "EXULP000015379",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-13T19:05:37Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_6ffb2908f80f4365baacf5046d2a2df0",
    "object": "Address",
    "created_at": "2020-02-13T19:05:37Z",
    "updated_at": "2020-02-13T19:05:37Z",
    "name": "Commerce",
    "company": null,
    "street1": "224 Commerce St Ste A-2",
    "street2": "",
    "city": "Broomfield",
    "state": "CO",
    "zip": "80020-2232",
    "country": "US",
    "phone": "1234567890",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": "order_1c3c07844f4846e5a1c54a08ef21c070",
  "parcel": {
    "id": "prcl_d1c1dd5d9cda4ff39eae1263acae003b",
    "object": "Parcel",
    "created_at": "2020-02-13T19:05:37Z",
    "updated_at": "2020-02-13T19:05:37Z",
    "length": 6,
    "width": 6,
    "height": 6,
    "predefined_package": null,
    "weight": 32,
    "mode": "production"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_e9336ae1c31044028c86753b82639a60",
    "object": "Address",
    "created_at": "2020-02-13T19:05:37Z",
    "updated_at": "2020-02-13T19:05:37Z",
    "name": "JAE-IN KIM",
    "company": null,
    "street1": "270 Chichirica Street",
    "street2": "#602",
    "city": "tumon",
    "state": null,
    "zip": "96913",
    "country": "GU",
    "phone": "7777777777",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 8,
  "return_address": {
    "id": "adr_6ffb2908f80f4365baacf5046d2a2df0",
    "object": "Address",
    "created_at": "2020-02-13T19:05:37Z",
    "updated_at": "2020-02-13T19:05:37Z",
    "name": "Commerce",
    "company": null,
    "street1": "224 Commerce St Ste A-2",
    "street2": "",
    "city": "Broomfield",
    "state": "CO",
    "zip": "80020-2232",
    "country": "US",
    "phone": "1234567890",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_e9336ae1c31044028c86753b82639a60",
    "object": "Address",
    "created_at": "2020-02-13T19:05:37Z",
    "updated_at": "2020-02-13T19:05:37Z",
    "name": "JAE-IN KIM",
    "company": null,
    "street1": "270 Chichirica Street",
    "street2": "#602",
    "city": "tumon",
    "state": null,
    "zip": "96913",
    "country": "GU",
    "phone": "7777777777",
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
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "Express",
      "carrier": "USPS",
      "rate": "43.60",
      "currency": "USD",
      "retail_rate": "50.85",
      "retail_currency": "USD",
      "list_rate": "43.60",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_3504fee50c8646fab43013a0e549f763",
      "id": "rate_f8b58b653dab4d83a2ab92504381a828"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "Priority",
      "carrier": "USPS",
      "rate": "9.56",
      "currency": "USD",
      "retail_rate": "14.90",
      "retail_currency": "USD",
      "list_rate": "11.19",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 3,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_3504fee50c8646fab43013a0e549f763",
      "id": "rate_12bb265f83e04ce89b3ff8a70c62191d"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "ParcelSelect",
      "carrier": "USPS",
      "rate": "10.89",
      "currency": "USD",
      "retail_rate": "10.89",
      "retail_currency": "USD",
      "list_rate": "10.89",
      "list_currency": "USD",
      "delivery_days": 13,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 13,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_3504fee50c8646fab43013a0e549f763",
      "id": "rate_06d96ac35fd7440fa5a3226be6631bde"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "Express",
      "carrier": "UPS",
      "rate": "74.59",
      "currency": "USD",
      "retail_rate": "145.29",
      "retail_currency": "USD",
      "list_rate": "145.46",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_38c6c82fe6b14278b218116dcf3ee192",
      "id": "rate_636ce8b5da234fa8b6aa1285be520ff7"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "Expedited",
      "carrier": "UPS",
      "rate": "69.08",
      "currency": "USD",
      "retail_rate": "128.97",
      "retail_currency": "USD",
      "list_rate": "135.19",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_38c6c82fe6b14278b218116dcf3ee192",
      "id": "rate_3be591637b694cff82327f3d916d266b"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-13T19:05:37Z",
      "updated_at": "2020-02-13T19:05:37Z",
      "mode": "production",
      "service": "UPSSaver",
      "carrier": "UPS",
      "rate": "72.98",
      "currency": "USD",
      "retail_rate": "142.79",
      "retail_currency": "USD",
      "list_rate": "142.60",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_fbca457cc2b64168ac97a33167c6baa8",
      "carrier_account_id": "ca_38c6c82fe6b14278b218116dcf3ee192",
      "id": "rate_bb84c1c8fd7a4174b93fec43ce9673af"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_fbca457cc2b64168ac97a33167c6baa8"
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
  *  if the item does not have an id, it will be created. */
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

customsInfo.save().catch(console.log);

// Recreate the shipment
const shipment = new api.Shipment({ 
    to_address: data.to_address,
    from_address: data.from_address,
    parcel: data.parcel,
    options: data.options,
    //customs_info: data.customs_info,
    customs_info: customsInfo,
    carrier_accounts: [process.env.USPS],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
