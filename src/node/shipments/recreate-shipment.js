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
  "created_at": "2020-04-28T13:54:19Z",
  "is_return": true,
  "messages": [],
  "mode": "test",
  "options": {
    "print_custom_1": "Order: #1001",
    "print_custom_2": "RMA: 0001.1001.2842020",
    "currency": "USD",
    "print_custom": [
      {
        "name": null,
        "value": "Order: #1001",
        "barcode": null
      },
      {
        "name": null,
        "value": "RMA: 0001.1001.2842020",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "date_advance": 0,
    "cost_center": "0009"
  },
  "reference": "0001.1001.2842020",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-04-28T13:54:19Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_725892cc22aa47278e191a79eb19e535",
    "object": "Address",
    "created_at": "2020-04-28T13:54:19Z",
    "updated_at": "2020-04-28T13:54:19Z",
    "name": "Easy Spirit",
    "company": null,
    "street1": "1248 South River Road",
    "street2": "",
    "city": "Cranbury",
    "state": "NJ",
    "zip": "08512",
    "country": "US",
    "phone": "18883279772",
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
    "id": "prcl_ce8f348d45bd4640afaf1a0589d6fa11",
    "object": "Parcel",
    "created_at": "2020-04-28T13:54:19Z",
    "updated_at": "2020-04-28T13:54:19Z",
    "length": 18,
    "width": 24,
    "height": 16,
    "predefined_package": null,
    "weight": 112,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_aed201fd5ace4239a974922a4efbe383",
    "object": "Address",
    "created_at": "2020-04-28T13:54:19Z",
    "updated_at": "2020-04-28T13:54:19Z",
    "name": "Lee Bissonnette",
    "company": "",
    "street1": "725 Fifth Avenue",
    "street2": "21st Floor",
    "city": "New York",
    "state": "NY",
    "zip": "10022",
    "country": "US",
    "phone": "16315332477",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 1,
  "return_address": {
    "id": "adr_725892cc22aa47278e191a79eb19e535",
    "object": "Address",
    "created_at": "2020-04-28T13:54:19Z",
    "updated_at": "2020-04-28T13:54:19Z",
    "name": "Easy Spirit",
    "company": null,
    "street1": "1248 South River Road",
    "street2": "",
    "city": "Cranbury",
    "state": "NJ",
    "zip": "08512",
    "country": "US",
    "phone": "18883279772",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_aed201fd5ace4239a974922a4efbe383",
    "object": "Address",
    "created_at": "2020-04-28T13:54:19Z",
    "updated_at": "2020-04-28T13:54:19Z",
    "name": "Lee Bissonnette",
    "company": "",
    "street1": "725 Fifth Avenue",
    "street2": "21st Floor",
    "city": "New York",
    "state": "NY",
    "zip": "10022",
    "country": "US",
    "phone": "16315332477",
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
      "created_at": "2020-04-28T13:54:19Z",
      "updated_at": "2020-04-28T13:54:19Z",
      "mode": "test",
      "service": "SingleReturn",
      "carrier": "UPSMailInnovations",
      "rate": "0.01",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_500c8125fe0347b5ac23a19c19413e8a",
      "carrier_account_id": "ca_1cb43d90d6fa43959a97fcdc945d3f2a",
      "id": "rate_bee2adbfcd994f72b632ae246e23de2e"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_500c8125fe0347b5ac23a19c19413e8a"
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
    // service: "Ground",
    // carrier: "UPS",
    // label_format: "PDF",
    carrier_accounts: [process.env.UPSMI],
    reference: 'lala',
    is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
