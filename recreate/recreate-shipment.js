const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Assign JSON data to variable
const data = (

// ENTER JSON DATA BELOW
//===============================================================//

{
  "created_at": "2020-02-10T17:24:10Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "endorsement": "FORWARDING_SERVICE_REQUESTED",
    "label_format": "PNG",
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": "DHL_TX",
  "status": "unknown",
  "tracking_code": "420600469374869903504517157555",
  "updated_at": "2020-02-10T17:24:14Z",
  "batch_id": "batch_dbc77bb0d9c640b8aa26d391e205b7e3",
  "batch_status": "postage_purchased",
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_058a5c0833ad49539d66d7015a1b5d51",
    "object": "Address",
    "created_at": "2020-02-10T17:24:09Z",
    "updated_at": "2020-02-10T17:24:09Z",
    "name": null,
    "company": "TPC",
    "street1": "4200 buckingham rd ste 105b",
    "street2": "",
    "city": "Fort Worth",
    "state": "TX",
    "zip": "76155",
    "country": "US",
    "phone": "7722174557",
    "email": null,
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
    "id": "prcl_ba802a3a9b3444859500d6228fedb91f",
    "object": "Parcel",
    "created_at": "2020-02-10T17:24:10Z",
    "updated_at": "2020-02-10T17:24:10Z",
    "length": null,
    "width": null,
    "height": null,
    "predefined_package": "Parcel",
    "weight": 8,
    "mode": "production"
  },
  "postage_label": {
    "object": "PostageLabel",
    "id": "pl_f7ac8324e9e04088be31cbd07ffa1fdb",
    "created_at": "2020-02-10T17:24:14Z",
    "updated_at": "2020-02-10T17:24:14Z",
    "date_advance": 0,
    "integrated_form": "none",
    "label_date": "2020-02-10T17:24:14Z",
    "label_resolution": 300,
    "label_size": "4x6",
    "label_type": "default",
    "label_file_type": "image/png",
    "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20200210/41b8a4f4dc0b445492cae93544453908.png",
    "label_pdf_url": null,
    "label_zpl_url": null,
    "label_epl2_url": null,
    "label_file": null
  },
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-02-10T17:24:10Z",
      "updated_at": "2020-02-10T17:24:10Z",
      "mode": "production",
      "service": "SMMarketingParcelExpedited",
      "carrier": "DHLeCommerce",
      "rate": "2.91",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
      "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc",
      "id": "rate_c39163a5a6c84e0fa61a367e14213e55"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T17:24:10Z",
      "updated_at": "2020-02-10T17:24:10Z",
      "mode": "production",
      "service": "DHLSMParcelExpedited",
      "carrier": "DHLeCommerce",
      "rate": "2.91",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
      "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc",
      "id": "rate_8191535f119f4d898c2876bc30d3187d"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T17:24:10Z",
      "updated_at": "2020-02-10T17:24:10Z",
      "mode": "production",
      "service": "DHLSMParcelGround",
      "carrier": "DHLeCommerce",
      "rate": "2.85",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
      "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc",
      "id": "rate_50e24a52930147b399e74a7b344376da"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T17:24:10Z",
      "updated_at": "2020-02-10T17:24:10Z",
      "mode": "production",
      "service": "DHLSMParcelExpeditedMax",
      "carrier": "DHLeCommerce",
      "rate": "3.33",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
      "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc",
      "id": "rate_8797de3faf464c1285e1a994189c31a1"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T17:24:10Z",
      "updated_at": "2020-02-10T17:24:10Z",
      "mode": "production",
      "service": "SMMarketingParcelGround",
      "carrier": "DHLeCommerce",
      "rate": "2.85",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
      "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc",
      "id": "rate_882723a82bb74c71b838a7bf885bfb09"
    }
  ],
  "refund_status": null,
  "scan_form": null,
  "selected_rate": {
    "id": "rate_8797de3faf464c1285e1a994189c31a1",
    "object": "Rate",
    "created_at": "2020-02-10T17:24:14Z",
    "updated_at": "2020-02-10T17:24:14Z",
    "mode": "production",
    "service": "DHLSMParcelExpeditedMax",
    "carrier": "DHLeCommerce",
    "rate": "3.33",
    "currency": "USD",
    "retail_rate": null,
    "retail_currency": null,
    "list_rate": null,
    "list_currency": null,
    "delivery_days": null,
    "delivery_date": null,
    "delivery_date_guaranteed": null,
    "est_delivery_days": null,
    "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
    "carrier_account_id": "ca_2b58acf9e29548e78d84d433f59e18fc"
  },
  "tracker": {
    "id": "trk_99b9f7ca75484b14a536ad4a0c8f11d4",
    "object": "Tracker",
    "mode": "production",
    "tracking_code": "420600469374869903504517157555",
    "status": "unknown",
    "status_detail": "unknown",
    "created_at": "2020-02-10T17:24:14Z",
    "updated_at": "2020-02-10T17:24:14Z",
    "signed_by": null,
    "weight": null,
    "est_delivery_date": null,
    "shipment_id": "shp_43ac72ca0712443091f3a95e7ae374b3",
    "carrier": "DHLeCommerce",
    "tracking_details": [],
    "carrier_detail": null,
    "finalized": false,
    "is_return": false,
    "public_url": "https://track.easypost.com/djE6dHJrXzk5YjlmN2NhNzU0ODRiMTRhNTM2YWQ0YTBjOGYxMWQ0",
    "fees": []
  },
  "to_address": {
    "id": "adr_28fd6970c9db477080459f5a62392bda",
    "object": "Address",
    "created_at": "2020-02-10T17:24:09Z",
    "updated_at": "2020-02-10T17:24:09Z",
    "name": "Georgette Pietrie",
    "company": null,
    "street1": "101 Hickory Dr",
    "street2": "",
    "city": "Lindenhurst",
    "state": "IL",
    "zip": "60046",
    "country": "US",
    "phone": "8478408801",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 5,
  "return_address": {
    "id": "adr_058a5c0833ad49539d66d7015a1b5d51",
    "object": "Address",
    "created_at": "2020-02-10T17:24:09Z",
    "updated_at": "2020-02-10T17:24:09Z",
    "name": null,
    "company": "TPC",
    "street1": "4200 buckingham rd ste 105b",
    "street2": "",
    "city": "Fort Worth",
    "state": "TX",
    "zip": "76155",
    "country": "US",
    "phone": "7722174557",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_28fd6970c9db477080459f5a62392bda",
    "object": "Address",
    "created_at": "2020-02-10T17:24:09Z",
    "updated_at": "2020-02-10T17:24:09Z",
    "name": "Georgette Pietrie",
    "company": null,
    "street1": "101 Hickory Dr",
    "street2": "",
    "city": "Lindenhurst",
    "state": "IL",
    "zip": "60046",
    "country": "US",
    "phone": "8478408801",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "forms": [],
  "fees": [
    {
      "object": "Fee",
      "type": "LabelFee",
      "amount": "0.01000",
      "charged": true,
      "refunded": false
    }
  ],
  "id": "shp_43ac72ca0712443091f3a95e7ae374b3",
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

// Recreate the shipment
const shipment = new api.Shipment({ 
    to_address: data.to_address,
    from_address: data.from_address,
    parcel: data.parcel,
    options: data.options,
    customs_info: data.customs_info,
    //carrier_accounts: [process.env.DHL_ECOMMERCE],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log);
