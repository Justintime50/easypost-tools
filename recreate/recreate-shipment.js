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
  "created_at": "2020-02-20T15:49:14Z",
  "is_return": true,
  "messages": [],
  "mode": "production",
  "options": {
    "invoice_number": "SH2601910",
    "print_custom_1": "SH2601910",
    "print_custom_2": "R",
    "label_format": "PNG",
    "currency": "USD",
    "print_custom": [
      {
        "name": null,
        "value": "SH2601910",
        "barcode": null
      },
      {
        "name": null,
        "value": "R",
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
  "tracking_code": "9202090982237618634135",
  "updated_at": "2020-02-20T15:49:17Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_f8714b707fa94aa1a66766866ac48d69",
    "object": "Address",
    "created_at": "2020-02-20T15:49:14Z",
    "updated_at": "2020-02-20T15:49:14Z",
    "name": null,
    "company": "Tommy John",
    "street1": "701A South Sally Place",
    "street2": "Unit A",
    "city": "Fullerton",
    "state": "CA",
    "zip": "92831",
    "country": "US",
    "phone": "8007083490",
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
    "id": "prcl_ff90754c987445b197dd076afaa4679a",
    "object": "Parcel",
    "created_at": "2020-02-20T15:49:14Z",
    "updated_at": "2020-02-20T15:49:14Z",
    "length": 12,
    "width": 12,
    "height": 12,
    "predefined_package": null,
    "weight": 12,
    "mode": "production"
  },
  "postage_label": {
    "object": "PostageLabel",
    "id": "pl_508d98376632423f84cffc39eb496d2c",
    "created_at": "2020-02-20T15:49:17Z",
    "updated_at": "2020-02-20T15:49:17Z",
    "date_advance": 0,
    "integrated_form": "none",
    "label_date": "2020-02-20T15:49:17Z",
    "label_resolution": 300,
    "label_size": "4x6",
    "label_type": "default",
    "label_file_type": "image/png",
    "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20200220/5fc25842cb6a4ff790fa8b2ed4eb83c9.png",
    "label_pdf_url": null,
    "label_zpl_url": null,
    "label_epl2_url": null,
    "label_file": null
  },
  "refund_status": null,
  "scan_form": null,
  "selected_rate": {
    "id": "rate_e81af2085d4d413b8f3a739ee57a1fcb",
    "object": "Rate",
    "created_at": "2020-02-20T15:49:17Z",
    "updated_at": "2020-02-20T15:49:17Z",
    "mode": "production",
    "service": "DHLSMParcelReturnLightDomestic",
    "carrier": "DHLeCommerce",
    "rate": "5.33",
    "currency": "USD",
    "retail_rate": null,
    "retail_currency": null,
    "list_rate": null,
    "list_currency": null,
    "delivery_days": null,
    "delivery_date": null,
    "delivery_date_guaranteed": null,
    "est_delivery_days": null,
    "shipment_id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1",
    "carrier_account_id": "ca_24fdf23ac2b8459893bb7648dad8e1e6"
  },
  "tracker": {
    "id": "trk_7c92abf3758f4a929a458ddde512a20c",
    "object": "Tracker",
    "mode": "production",
    "tracking_code": "9202090982237618634135",
    "status": "unknown",
    "status_detail": "unknown",
    "created_at": "2020-02-20T15:49:18Z",
    "updated_at": "2020-02-20T15:49:18Z",
    "signed_by": null,
    "weight": null,
    "est_delivery_date": null,
    "shipment_id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1",
    "carrier": "DHLeCommerce",
    "tracking_details": [],
    "carrier_detail": null,
    "finalized": false,
    "is_return": true,
    "public_url": "https://track.easypost.com/djE6dHJrXzdjOTJhYmYzNzU4ZjRhOTI5YTQ1OGRkZGU1MTJhMjBj",
    "fees": []
  },
  "to_address": {
    "id": "adr_f0c1b5e680654c79a1e334247d23dd6e",
    "object": "Address",
    "created_at": "2020-02-20T15:49:14Z",
    "updated_at": "2020-02-20T15:49:14Z",
    "name": "Ryan Brady",
    "company": "",
    "street1": "133 W 46th St",
    "street2": "",
    "city": "Indianapolis",
    "state": "IN",
    "zip": "46208",
    "country": "US",
    "phone": "",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 7,
  "return_address": {
    "id": "adr_f8714b707fa94aa1a66766866ac48d69",
    "object": "Address",
    "created_at": "2020-02-20T15:49:14Z",
    "updated_at": "2020-02-20T15:49:14Z",
    "name": null,
    "company": "Tommy John",
    "street1": "701A South Sally Place",
    "street2": "Unit A",
    "city": "Fullerton",
    "state": "CA",
    "zip": "92831",
    "country": "US",
    "phone": "8007083490",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_f0c1b5e680654c79a1e334247d23dd6e",
    "object": "Address",
    "created_at": "2020-02-20T15:49:14Z",
    "updated_at": "2020-02-20T15:49:14Z",
    "name": "Ryan Brady",
    "company": "",
    "street1": "133 W 46th St",
    "street2": "",
    "city": "Indianapolis",
    "state": "IN",
    "zip": "46208",
    "country": "US",
    "phone": "",
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
      "created_at": "2020-02-20T15:49:14Z",
      "updated_at": "2020-02-20T15:49:14Z",
      "mode": "production",
      "service": "DHLSMParcelReturnLightDomestic",
      "carrier": "DHLeCommerce",
      "rate": "5.33",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1",
      "carrier_account_id": "ca_24fdf23ac2b8459893bb7648dad8e1e6",
      "id": "rate_e81af2085d4d413b8f3a739ee57a1fcb"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-20T15:49:14Z",
      "updated_at": "2020-02-20T15:49:14Z",
      "mode": "production",
      "service": "DHLSMParcelReturnPlus",
      "carrier": "DHLeCommerce",
      "rate": "11.13",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1",
      "carrier_account_id": "ca_24fdf23ac2b8459893bb7648dad8e1e6",
      "id": "rate_314d47c5382d4997af162b3cf8439073"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-20T15:49:14Z",
      "updated_at": "2020-02-20T15:49:14Z",
      "mode": "production",
      "service": "DHLSMParcelReturnGroundDomestic",
      "carrier": "DHLeCommerce",
      "rate": "7.78",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1",
      "carrier_account_id": "ca_24fdf23ac2b8459893bb7648dad8e1e6",
      "id": "rate_bcd62ca8d9b34427a2c8509a47170f6f"
    }
  ],
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
  "id": "shp_719e3f492eaf4e379e15c3d0f2e9d0e1"
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
    carrier_accounts: [process.env.DHL_ECOMMERCE],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
