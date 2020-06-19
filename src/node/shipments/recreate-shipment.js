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
    "created_at": "2020-06-18T19:23:16Z",
    "is_return": false,
    "messages": [
      {
        "carrier": null,
        "carrier_account_id": null,
        "type": "rate_error",
        "message": "A to_address, from_address and parcel are required for rating."
      }
    ],
    "mode": "production",
    "options": {
      "currency": "CAD",
      "invoice_number": "ORD00008",
      "payment": {
        "type": "SENDER"
      },
      "date_advance": 0,
      "label_date": "2020-06-18T19:23:16+00:00"
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": null,
    "updated_at": "2020-06-18T19:23:16Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": null,
    "from_address": null,
    "insurance": null,
    "order_id": null,
    "parcel": null,
    "postage_label": null,
    "refund_status": null,
    "scan_form": null,
    "selected_rate": null,
    "tracker": null,
    "to_address": null,
    "usps_zone": null,
    "return_address": null,
    "buyer_address": null,
    "object": "Shipment",
    "rates": [],
    "forms": [],
    "fees": [],
    "id": "shp_322d11c9f7e94d4d80a862664c08b622"
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
  service: "Xpresspost",
  carrier: "CanadaPost",
  // label_format: "PDF",
  carrier_accounts: [process.env.DHL_ECOMMERCE], // If CANADA_POST, use TEST!
  reference: data.reference,
  // is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
