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
  "created_at": "2020-03-26T17:02:06Z",
  "is_return": false,
  "messages": [],
  "mode": "test",
  "options": {
    "print_custom_1": "100544",
    "label_date": "2020-03-30T00:00:00+00:00",
    "handling_instructions": "LEAVE WITH RECEPTION.",
    "print_custom_3": "CJKWEL-A",
    "print_custom_2": "18-213432",
    "currency": "USD",
    "print_custom": [
      {
        "name": null,
        "value": "100544",
        "barcode": null
      },
      {
        "name": null,
        "value": "18-213432",
        "barcode": null
      },
      {
        "name": null,
        "value": "CJKWEL-A",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "date_advance": 4
  },
  "reference": "{\"orderNumber\":\"100544\",\"cartonId\":\"00000000000000000032\"}",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-03-26T17:02:06Z",
  "batch_id": "batch_56c2af121b6846469433727d1b10352b",
  "batch_status": "postage_purchase_failed",
  "batch_message": "A carrier and service must be provided to purchase through a Batch.",
  "customs_info": null,
  "from_address": {
    "id": "adr_16c38cb96a6a416a917b983b2226bf86",
    "object": "Address",
    "created_at": "2020-03-26T17:02:06Z",
    "updated_at": "2020-03-26T17:02:06Z",
    "name": "BISSELL HOMECARE INC.",
    "company": null,
    "street1": "100 York Blvd",
    "street2": "Suite 404",
    "city": "Richmond Hill",
    "state": "ON",
    "zip": "L4B 1J8",
    "country": "CA",
    "phone": "8051231234",
    "email": "svonship@sender.com",
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
    "id": "prcl_feca5b7fa6904d3cb8993b7be2e1b3a4",
    "object": "Parcel",
    "created_at": "2020-03-26T17:02:06Z",
    "updated_at": "2020-03-26T17:02:06Z",
    "length": 12,
    "width": 12,
    "height": 12,
    "predefined_package": null,
    "weight": 316,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_78f21663db6c4195b900e35b8c3a6283",
    "object": "Address",
    "created_at": "2020-03-26T17:02:06Z",
    "updated_at": "2020-03-26T17:02:06Z",
    "name": "KAREN MACDONALD",
    "company": "MAVES INTERNATIONAL",
    "street1": "17 GILROY STREET",
    "street2": "",
    "city": "CUMBERLAND",
    "state": "NS",
    "zip": "B0M1X0",
    "country": "CA",
    "phone": "9058828300",
    "email": "MMCRECEIVER@MAVES.COM",
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 45.64534,
          "longitude": -64.04832,
          "time_zone": "America/Halifax"
        }
      }
    }
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_16c38cb96a6a416a917b983b2226bf86",
    "object": "Address",
    "created_at": "2020-03-26T17:02:06Z",
    "updated_at": "2020-03-26T17:02:06Z",
    "name": "BISSELL HOMECARE INC.",
    "company": null,
    "street1": "100 York Blvd",
    "street2": "Suite 404",
    "city": "Richmond Hill",
    "state": "ON",
    "zip": "L4B 1J8",
    "country": "CA",
    "phone": "8051231234",
    "email": "svonship@sender.com",
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_78f21663db6c4195b900e35b8c3a6283",
    "object": "Address",
    "created_at": "2020-03-26T17:02:06Z",
    "updated_at": "2020-03-26T17:02:06Z",
    "name": "KAREN MACDONALD",
    "company": "MAVES INTERNATIONAL",
    "street1": "17 GILROY STREET",
    "street2": "",
    "city": "CUMBERLAND",
    "state": "NS",
    "zip": "B0M1X0",
    "country": "CA",
    "phone": "9058828300",
    "email": "MMCRECEIVER@MAVES.COM",
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 45.64534,
          "longitude": -64.04832,
          "time_zone": "America/Halifax"
        }
      }
    }
  },
  "object": "Shipment",
  "rates": [],
  "forms": [],
  "fees": [],
  "id": "shp_96a9d7d01ab64edf83403acfbe06a213"
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
