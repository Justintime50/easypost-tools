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
  "created_at": "2020-03-17T14:21:39Z",
  "is_return": false,
  "messages": [],
  "mode": "test",
  "options": {
    "label_size": "4X6",
    "print_custom_1": "support@",
    "print_custom_2": "curology.com",
    "endorsement": "RETURN_SERVICE_REQUESTED",
    "billing_ref": "1",
    "currency": "USD",
    "print_custom": [
      {
        "name": null,
        "value": "support@",
        "barcode": null
      },
      {
        "name": null,
        "value": "curology.com",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": null,
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-03-17T14:21:39Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_1de37dd8270446b58cc093640897ec80",
    "object": "Address",
    "created_at": "2020-03-17T14:21:39Z",
    "updated_at": "2020-03-17T14:21:39Z",
    "name": null,
    "company": "Curology Medical Group",
    "street1": "5717 Pacific Center Blvd.",
    "street2": "Suite 200",
    "city": "San Diego",
    "state": "CA",
    "zip": "92121",
    "country": "US",
    "phone": "8588591188",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_3f2139a7f56846dc99670a1199d8254a",
    "object": "Parcel",
    "created_at": "2020-03-17T14:21:39Z",
    "updated_at": "2020-03-17T14:21:39Z",
    "length": 7.31,
    "width": 7.31,
    "height": 1.75,
    "predefined_package": null,
    "weight": 4.09,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_3bfca00a2d7749b2aa5fcec9289dcb44",
    "object": "Address",
    "created_at": "2020-03-17T14:21:39Z",
    "updated_at": "2020-03-17T14:21:39Z",
    "name": "Test User",
    "company": null,
    "street1": "369 Hayes St",
    "street2": "",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94102",
    "country": "US",
    "phone": "1111111111",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 4,
  "return_address": {
    "id": "adr_1de37dd8270446b58cc093640897ec80",
    "object": "Address",
    "created_at": "2020-03-17T14:21:39Z",
    "updated_at": "2020-03-17T14:21:39Z",
    "name": null,
    "company": "Curology Medical Group",
    "street1": "5717 Pacific Center Blvd.",
    "street2": "Suite 200",
    "city": "San Diego",
    "state": "CA",
    "zip": "92121",
    "country": "US",
    "phone": "8588591188",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_3bfca00a2d7749b2aa5fcec9289dcb44",
    "object": "Address",
    "created_at": "2020-03-17T14:21:39Z",
    "updated_at": "2020-03-17T14:21:39Z",
    "name": "Test User",
    "company": null,
    "street1": "369 Hayes St",
    "street2": "",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94102",
    "country": "US",
    "phone": "1111111111",
    "email": null,
    "mode": "test",
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
      "created_at": "2020-03-17T14:21:39Z",
      "updated_at": "2020-03-17T14:21:39Z",
      "mode": "test",
      "service": "SMMarketingParcelExpedited",
      "carrier": "DHLeCommerce",
      "rate": "2.51",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_f21ccdadd46a42dab312552176f6884d",
      "carrier_account_id": "ca_4b6f5f425fb641d5b6a2fa57c81aa215",
      "id": "rate_2cfe83d63ac24355b2491ed8baf5ea1c"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-17T14:21:39Z",
      "updated_at": "2020-03-17T14:21:39Z",
      "mode": "test",
      "service": "DHLSMParcelExpedited",
      "carrier": "DHLeCommerce",
      "rate": "2.74",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_f21ccdadd46a42dab312552176f6884d",
      "carrier_account_id": "ca_4b6f5f425fb641d5b6a2fa57c81aa215",
      "id": "rate_c34b20f9209b48d990d1fb974637866c"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-17T14:21:39Z",
      "updated_at": "2020-03-17T14:21:39Z",
      "mode": "test",
      "service": "DHLSMParcelGround",
      "carrier": "DHLeCommerce",
      "rate": "2.68",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_f21ccdadd46a42dab312552176f6884d",
      "carrier_account_id": "ca_4b6f5f425fb641d5b6a2fa57c81aa215",
      "id": "rate_7a782a718e8a4ac1bd0962bc70a0a86c"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-17T14:21:39Z",
      "updated_at": "2020-03-17T14:21:39Z",
      "mode": "test",
      "service": "DHLSMParcelExpeditedMax",
      "carrier": "DHLeCommerce",
      "rate": "2.87",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_f21ccdadd46a42dab312552176f6884d",
      "carrier_account_id": "ca_4b6f5f425fb641d5b6a2fa57c81aa215",
      "id": "rate_f431e968ccaf403cbd989bd38ec2772f"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-17T14:21:39Z",
      "updated_at": "2020-03-17T14:21:39Z",
      "mode": "test",
      "service": "SMMarketingParcelGround",
      "carrier": "DHLeCommerce",
      "rate": "2.45",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_f21ccdadd46a42dab312552176f6884d",
      "carrier_account_id": "ca_4b6f5f425fb641d5b6a2fa57c81aa215",
      "id": "rate_ecaef3244da0423bbbfe0b61276f6bba"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_f21ccdadd46a42dab312552176f6884d"
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
    // carrier_accounts: [process.env.FEDEX],
    // service: "Ground",
    // carrier: "UPS",
    label_format: "PDF",
    carrier_accounts: [process.env.UPS],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
