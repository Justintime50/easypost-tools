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
  "created_at": "2020-03-02T19:34:23Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "additional_handling": false,
    "alcohol": false,
    "bill_third_party_account": "F9654V",
    "bill_third_party_country": "NL",
    "bill_third_party_postal_code": "2153",
    "by_drone": false,
    "carbon_neutral": false,
    "currency": "USD",
    "dry_ice": false,
    "freight_charge": 0,
    "hold_for_pickup": false,
    "label_format": "ZPL",
    "machinable": false,
    "print_custom_1": "AEP0000000557",
    "print_custom_2": "PER-000000000382",
    "print_custom_1_barcode": false,
    "print_custom_2_barcode": false,
    "print_custom_3_barcode": false,
    "print_custom_1_code": "MK",
    "saturday_delivery": false,
    "registered_mail": false,
    "registered_mail_amount": 0,
    "return_receipt": false,
    "print_custom": [
      {
        "name": "MK",
        "value": "AEP0000000557",
        "barcode": false
      },
      {
        "name": null,
        "value": "PER-000000000382",
        "barcode": false
      }
    ],
    "payment": {
      "type": "THIRD_PARTY",
      "account": "F9654V",
      "postal_code": "2153",
      "country": "NL"
    },
    "duty_payment": {
      "account": "F9654V",
      "country": "NL",
      "postal_code": "2153",
      "type": "THIRD_PARTY"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": "1",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-03-02T19:34:23Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_93e5bf89296d4446999e059fe5408cc5",
    "object": "CustomsInfo",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "contents_explanation": "repair parts",
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
        "id": "cstitem_2979864ad794417d804168646488c034",
        "object": "CustomsItem",
        "created_at": "2020-03-02T19:34:23Z",
        "updated_at": "2020-03-02T19:34:23Z",
        "description": "Top End Gasket Set",
        "hs_tariff_number": "8484.90.0000",
        "origin_country": "US",
        "quantity": 1,
        "value": "26.76",
        "weight": 1.6,
        "code": "810880PRO",
        "mode": "production",
        "manufacturer": null,
        "currency": "USD"
      },
      {
        "id": "cstitem_c4a6c87ec67743ad921084dde135f25e",
        "object": "CustomsItem",
        "created_at": "2020-03-02T19:34:23Z",
        "updated_at": "2020-03-02T19:34:23Z",
        "description": "Top End Gasket Set",
        "hs_tariff_number": "8484.90.0000",
        "origin_country": "US",
        "quantity": 10,
        "value": "251.4",
        "weight": 16,
        "code": "810974PRO",
        "mode": "production",
        "manufacturer": null,
        "currency": "USD"
      },
      {
        "id": "cstitem_cd3ec32346d644f29ab9baf8867bd593",
        "object": "CustomsItem",
        "created_at": "2020-03-02T19:34:23Z",
        "updated_at": "2020-03-02T19:34:23Z",
        "description": "Gasket Set w/o CS OS",
        "hs_tariff_number": "8484.90.0000",
        "origin_country": "TW",
        "quantity": 5,
        "value": "142.45",
        "weight": 8,
        "code": "807242PRO",
        "mode": "production",
        "manufacturer": null,
        "currency": "USD"
      },
      {
        "id": "cstitem_1f7a7f03ac06449ba43265364e4f9e97",
        "object": "CustomsItem",
        "created_at": "2020-03-02T19:34:23Z",
        "updated_at": "2020-03-02T19:34:23Z",
        "description": "Complete Gasket Sets w/Seals",
        "hs_tariff_number": "8484.90.0000",
        "origin_country": "US",
        "quantity": 4,
        "value": "164.6",
        "weight": 6.4,
        "code": "811974PRO",
        "mode": "production",
        "manufacturer": null,
        "currency": "USD"
      }
    ]
  },
  "from_address": {
    "id": "adr_e83fac1806a843968b5e073b3249f480",
    "object": "Address",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "name": "Winderosa",
    "company": null,
    "street1": "783 Auburn Road",
    "street2": "",
    "city": "Peru",
    "state": "ME",
    "zip": "04290",
    "country": "US",
    "phone": "2075624456",
    "email": "sales@arrowheadep.com",
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
    "id": "prcl_c645e063ef3d459c834169379719912e",
    "object": "Parcel",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "length": 20,
    "width": 16,
    "height": 5,
    "predefined_package": null,
    "weight": 144,
    "mode": "production"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_b099b42fa5b1408aa89ee4c545adf61d",
    "object": "Address",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "name": "DSV Air & Sea US, Inc",
    "company": null,
    "street1": "10701 Seymour Avenue",
    "street2": "",
    "city": "Franklin Park",
    "state": "IL",
    "zip": "60131",
    "country": "US",
    "phone": "8479568855",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 5,
  "return_address": {
    "id": "adr_e83fac1806a843968b5e073b3249f480",
    "object": "Address",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "name": "Winderosa",
    "company": null,
    "street1": "783 Auburn Road",
    "street2": "",
    "city": "Peru",
    "state": "ME",
    "zip": "04290",
    "country": "US",
    "phone": "2075624456",
    "email": "sales@arrowheadep.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_b099b42fa5b1408aa89ee4c545adf61d",
    "object": "Address",
    "created_at": "2020-03-02T19:34:23Z",
    "updated_at": "2020-03-02T19:34:23Z",
    "name": "DSV Air & Sea US, Inc",
    "company": null,
    "street1": "10701 Seymour Avenue",
    "street2": "",
    "city": "Franklin Park",
    "state": "IL",
    "zip": "60131",
    "country": "US",
    "phone": "8479568855",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "NextDayAir",
      "carrier": "UPS",
      "rate": "20.58",
      "currency": "USD",
      "retail_rate": "119.49",
      "retail_currency": "USD",
      "list_rate": "119.94",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-03-03T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_d54bda1655d74ed6991f4bdd655fad09"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "NextDayAirEarlyAM",
      "carrier": "UPS",
      "rate": "154.52",
      "currency": "USD",
      "retail_rate": "151.36",
      "retail_currency": "USD",
      "list_rate": "151.81",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-03-03T08:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_89b76b3df7d740a5bb0ba102dec0c376"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "NextDayAirSaver",
      "carrier": "UPS",
      "rate": "21.43",
      "currency": "USD",
      "retail_rate": "114.73",
      "retail_currency": "USD",
      "list_rate": "115.15",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-03-03T15:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_e412ddbd904448f09933a692358446a2"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "2ndDayAir",
      "carrier": "UPS",
      "rate": "14.64",
      "currency": "USD",
      "retail_rate": "50.75",
      "retail_currency": "USD",
      "list_rate": "51.68",
      "list_currency": "USD",
      "delivery_days": 2,
      "delivery_date": "2020-03-04T23:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_75a80ad2b76d4afab1cd5d440ac81766"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "2ndDayAirAM",
      "carrier": "UPS",
      "rate": "16.76",
      "currency": "USD",
      "retail_rate": "58.06",
      "retail_currency": "USD",
      "list_rate": "59.06",
      "list_currency": "USD",
      "delivery_days": 2,
      "delivery_date": "2020-03-04T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_2e10a4d0d73a4258bb725810d378dd41"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "3DaySelect",
      "carrier": "UPS",
      "rate": "12.30",
      "currency": "USD",
      "retail_rate": "35.03",
      "retail_currency": "USD",
      "list_rate": "33.93",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": "2020-03-05T23:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_7f141e4e9e90459dbef6328373435b92"
    },
    {
      "object": "Rate",
      "created_at": "2020-03-02T19:34:29Z",
      "updated_at": "2020-03-02T19:34:29Z",
      "mode": "production",
      "service": "Ground",
      "carrier": "UPS",
      "rate": "5.27",
      "currency": "USD",
      "retail_rate": "19.14",
      "retail_currency": "USD",
      "list_rate": "14.36",
      "list_currency": "USD",
      "delivery_days": 3,
      "delivery_date": "2020-03-05T23:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_9d3df19b76424dc9ad62a45057f50f58",
      "carrier_account_id": "ca_ddb0bd034e934e129da92ce793dd4c56",
      "id": "rate_d94c43f4431b43f1ac727cb6f365d94c"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_9d3df19b76424dc9ad62a45057f50f58"
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
    service: "Ground",
    carrier: "UPS",
    carrier_accounts: [process.env.UPS],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
