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
    "created_at": "2020-05-21T08:38:43Z",
    "is_return": false,
    "messages": [],
    "mode": "production",
    "options": {
      "label_format": "PDF",
      "label_date": "2020-05-21T00:00:00+00:00",
      "label_size": "4X6",
      "currency": "USD",
      "payment": {
        "type": "SENDER"
      },
      "date_advance": 0
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": null,
    "updated_at": "2020-05-21T08:38:43Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": null,
    "from_address": {
      "id": "adr_29dcdd2eb6f94a4aa9580ca98f806e97",
      "object": "Address",
      "created_at": "2020-05-21T08:38:43Z",
      "updated_at": "2020-05-21T08:38:43Z",
      "name": "CJ CAROTA",
      "company": "LEXINGTON - NC WAREHOUSE",
      "street1": "176 LFI COMPLEX LANE",
      "street2": null,
      "city": "LEXINGTON",
      "state": "NC",
      "zip": "27292",
      "country": "US",
      "phone": "3369068462",
      "email": "adam@branchfurniture.com",
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
      "id": "prcl_19fc1d7c0c56484fb3a859bed3a26c2b",
      "object": "Parcel",
      "created_at": "2020-05-21T08:38:43Z",
      "updated_at": "2020-05-21T08:38:43Z",
      "length": 26,
      "width": 16,
      "height": 29,
      "predefined_package": null,
      "weight": 704,
      "mode": "production"
    },
    "postage_label": null,
    "refund_status": null,
    "scan_form": null,
    "selected_rate": null,
    "tracker": null,
    "to_address": {
      "id": "adr_8e04ee0e451a4fc981865e90b7f0f1fd",
      "object": "Address",
      "created_at": "2020-05-21T08:38:43Z",
      "updated_at": "2020-05-21T08:38:43Z",
      "name": "DENNIS HUANG",
      "company": null,
      "street1": "1415 LIMU DR",
      "street2": "",
      "city": "CARPINTERIA",
      "state": "CA",
      "zip": "93013-1703",
      "country": "US",
      "phone": "16262622724",
      "email": "DINY88@GMAIL.COM",
      "mode": "production",
      "carrier_facility": null,
      "residential": true,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": {
        "delivery": {
          "success": true,
          "errors": [],
          "details": {
            "latitude": 34.40401,
            "longitude": -119.51819,
            "time_zone": "America/Los_Angeles"
          }
        }
      }
    },
    "usps_zone": 8,
    "return_address": {
      "id": "adr_29dcdd2eb6f94a4aa9580ca98f806e97",
      "object": "Address",
      "created_at": "2020-05-21T08:38:43Z",
      "updated_at": "2020-05-21T08:38:43Z",
      "name": "CJ CAROTA",
      "company": "LEXINGTON - NC WAREHOUSE",
      "street1": "176 LFI COMPLEX LANE",
      "street2": null,
      "city": "LEXINGTON",
      "state": "NC",
      "zip": "27292",
      "country": "US",
      "phone": "3369068462",
      "email": "adam@branchfurniture.com",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": {}
    },
    "buyer_address": {
      "id": "adr_8e04ee0e451a4fc981865e90b7f0f1fd",
      "object": "Address",
      "created_at": "2020-05-21T08:38:43Z",
      "updated_at": "2020-05-21T08:38:43Z",
      "name": "DENNIS HUANG",
      "company": null,
      "street1": "1415 LIMU DR",
      "street2": "",
      "city": "CARPINTERIA",
      "state": "CA",
      "zip": "93013-1703",
      "country": "US",
      "phone": "16262622724",
      "email": "DINY88@GMAIL.COM",
      "mode": "production",
      "carrier_facility": null,
      "residential": true,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": {
        "delivery": {
          "success": true,
          "errors": [],
          "details": {
            "latitude": 34.40401,
            "longitude": -119.51819,
            "time_zone": "America/Los_Angeles"
          }
        }
      }
    },
    "object": "Shipment",
    "rates": [
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "Ground",
        "carrier": "UPS",
        "rate": "86.84",
        "currency": "USD",
        "retail_rate": "125.54",
        "retail_currency": "USD",
        "list_rate": "82.90",
        "list_currency": "USD",
        "delivery_days": 5,
        "delivery_date": "2020-05-29T23:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 5,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_ac486ff4495a4620925db351269f3082"
      },
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "3DaySelect",
        "carrier": "UPS",
        "rate": "362.62",
        "currency": "USD",
        "retail_rate": "299.45",
        "retail_currency": "USD",
        "list_rate": "336.27",
        "list_currency": "USD",
        "delivery_days": 3,
        "delivery_date": "2020-05-27T23:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 3,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_e7300eff2bbc4c3a967739a0b72e240f"
      },
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "2ndDayAir",
        "carrier": "UPS",
        "rate": "510.23",
        "currency": "USD",
        "retail_rate": "403.87",
        "retail_currency": "USD",
        "list_rate": "477.46",
        "list_currency": "USD",
        "delivery_days": 2,
        "delivery_date": "2020-05-26T23:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 2,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_e29dd8824cc14354bda99523183b0c9e"
      },
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "NextDayAirSaver",
        "carrier": "UPS",
        "rate": "684.73",
        "currency": "USD",
        "retail_rate": "570.59",
        "retail_currency": "USD",
        "list_rate": "640.69",
        "list_currency": "USD",
        "delivery_days": 1,
        "delivery_date": "2020-05-22T23:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 1,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_2e36dc8926d64049827c50a6684ea26a"
      },
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "NextDayAirEarlyAM",
        "carrier": "UPS",
        "rate": "718.77",
        "currency": "USD",
        "retail_rate": "606.56",
        "retail_currency": "USD",
        "list_rate": "674.48",
        "list_currency": "USD",
        "delivery_days": 1,
        "delivery_date": "2020-05-22T10:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 1,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_ee07eb3de09547d788aab9da05de2545"
      },
      {
        "object": "Rate",
        "created_at": "2020-05-21T08:38:45Z",
        "updated_at": "2020-05-21T08:38:45Z",
        "mode": "production",
        "service": "NextDayAir",
        "carrier": "UPS",
        "rate": "688.47",
        "currency": "USD",
        "retail_rate": "576.26",
        "retail_currency": "USD",
        "list_rate": "644.18",
        "list_currency": "USD",
        "delivery_days": 1,
        "delivery_date": "2020-05-22T12:00:00Z",
        "delivery_date_guaranteed": false,
        "est_delivery_days": 1,
        "shipment_id": "shp_54b91b76111943219e170ac6c4af8a92",
        "carrier_account_id": "ca_66c22fc15aaf4a1985e513d869f3f718",
        "id": "rate_964a330140044f33accf39e478aef60a"
      }
    ],
    "forms": [],
    "fees": [],
    "id": "shp_54b91b76111943219e170ac6c4af8a92"
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
  // service: "Ground",
  // carrier: "UPS",
  // label_format: "PDF",
  carrier_accounts: [process.env.UPS],
  // reference: 'lala',
  // is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
