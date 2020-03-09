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
  "created_at": "2019-10-18T15:42:04Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "invoice_number": "56545 / 66036",
    "print_custom_1": "11191132",
    "print_custom_1_code": "PO",
    "currency": "USD",
    "print_custom": [
      {
        "name": "PO",
        "value": "11191132",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0,
    "label_format": "PDF"
  },
  "reference": null,
  "status": "pre_transit",
  "tracking_code": "CM290097779US",
  "updated_at": "2019-10-18T17:48:05Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_3c510479bb6a4ef990eedd5692c6528b",
    "object": "CustomsInfo",
    "created_at": "2019-10-18T15:42:04Z",
    "updated_at": "2019-10-18T15:42:04Z",
    "contents_explanation": "Merchandise",
    "contents_type": "merchandise",
    "customs_certify": true,
    "customs_signer": "BRUCE HINES",
    "eel_pfc": "NOEEI 30.37(a)",
    "non_delivery_option": "Return",
    "restriction_comments": "",
    "restriction_type": "none",
    "mode": "production",
    "declaration": null,
    "customs_items": [
      {
        "id": "cstitem_7ba6f78dbfc04b7eb7ae11acac764d53",
        "object": "CustomsItem",
        "created_at": "2019-10-18T15:42:04Z",
        "updated_at": "2019-10-18T15:42:04Z",
        "description": "LemonPrep™ 4 oz Tubes (3 pack)",
        "hs_tariff_number": "3401-2",
        "origin_country": "US",
        "quantity": 3,
        "value": "1.0",
        "weight": 45.6,
        "code": "MD0019-T",
        "mode": "production",
        "manufacturer": null,
        "currency": null
      },
      {
        "id": "cstitem_02b7c56ef1e942e6a2d9a2af193673d7",
        "object": "CustomsItem",
        "created_at": "2019-10-18T15:42:04Z",
        "updated_at": "2019-10-18T15:42:04Z",
        "description": "LemonPrep™ SU Cups (24/Pack)",
        "hs_tariff_number": "3401-2",
        "origin_country": "US",
        "quantity": 1,
        "value": "1.0",
        "weight": 12,
        "code": "MD0019-SUP",
        "mode": "production",
        "manufacturer": null,
        "currency": null
      },
      {
        "id": "cstitem_fba6efd5427b4bb8aa83abb6b4106674",
        "object": "CustomsItem",
        "created_at": "2019-10-18T15:42:04Z",
        "updated_at": "2019-10-18T15:42:04Z",
        "description": "8x8x8 box",
        "hs_tariff_number": "0000-0",
        "origin_country": "US",
        "quantity": 1,
        "value": "1.0",
        "weight": 0.1,
        "code": "AM8C",
        "mode": "production",
        "manufacturer": null,
        "currency": null
      }
    ]
  },
  "from_address": {
    "id": "adr_5d192578b7ac45809b7f4f6e6e9bb4f0",
    "object": "Address",
    "created_at": "2019-10-18T15:42:04Z",
    "updated_at": "2019-10-18T15:42:04Z",
    "name": null,
    "company": "Mavidon",
    "street1": "6625 White Dr",
    "street2": "",
    "city": "Riviera",
    "state": "FL",
    "zip": "33407",
    "country": "US",
    "phone": "5615852227",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": "order_071edefc7c2e4fdeb21eea96ff598c04",
  "parcel": {
    "id": "prcl_cda045c64306489ea7935b8887d2fc37",
    "object": "Parcel",
    "created_at": "2019-10-18T15:42:04Z",
    "updated_at": "2019-10-18T15:42:04Z",
    "length": 8,
    "width": 8,
    "height": 8,
    "predefined_package": null,
    "weight": 66.4,
    "mode": "production"
  },
  "postage_label": {
    "object": "PostageLabel",
    "id": "pl_b64aa8f941eb40c885b1cc2901012a25",
    "created_at": "2019-10-18T15:42:29Z",
    "updated_at": "2019-10-18T15:42:29Z",
    "date_advance": 0,
    "integrated_form": "none",
    "label_date": "2019-10-18T15:42:29Z",
    "label_resolution": 300,
    "label_size": "6x4",
    "label_type": "default",
    "label_file_type": "image/png",
    "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20191018/6d1c2c448d2a44cca17c00436e762e3a.png",
    "label_pdf_url": null,
    "label_zpl_url": null,
    "label_epl2_url": null,
    "label_file": null
  },
  "refund_status": null,
  "scan_form": null,
  "selected_rate": {
    "id": "rate_4f0653b032944a199a269d3e53abfc35",
    "object": "Rate",
    "created_at": "2019-10-18T15:42:29Z",
    "updated_at": "2019-10-18T15:42:29Z",
    "mode": "production",
    "service": "PriorityMailInternational",
    "carrier": "USPS",
    "rate": "58.19",
    "currency": "USD",
    "retail_rate": "61.25",
    "retail_currency": "USD",
    "list_rate": "58.19",
    "list_currency": "USD",
    "delivery_days": null,
    "delivery_date": null,
    "delivery_date_guaranteed": false,
    "est_delivery_days": null,
    "shipment_id": "shp_6cc4b47375c54405bf7773ad64b30c64",
    "carrier_account_id": "ca_383c67ef659748a7afe29bdfa9f1adc5"
  },
  "tracker": {
    "id": "trk_d1b495a8ca66478bba5225f8027998fc",
    "object": "Tracker",
    "mode": "production",
    "tracking_code": "CM290097779US",
    "status": "pre_transit",
    "status_detail": "unknown",
    "created_at": "2019-10-18T15:42:30Z",
    "updated_at": "2019-11-05T22:55:52Z",
    "signed_by": null,
    "weight": null,
    "est_delivery_date": null,
    "shipment_id": "shp_6cc4b47375c54405bf7773ad64b30c64",
    "carrier": "USPS",
    "tracking_details": [
      {
        "object": "TrackingDetail",
        "message": "SHIPPING LBL CREATED USPS AWAITS ITEM",
        "description": null,
        "status": "pre_transit",
        "status_detail": "label_created",
        "datetime": "2019-10-18T15:42:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      },
      {
        "object": "TrackingDetail",
        "message": "PRE-SHIPMENT INFO SENT USPS AWAITS ITEM",
        "description": null,
        "status": "pre_transit",
        "status_detail": "status_update",
        "datetime": "2019-10-19T01:11:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      },
      {
        "object": "TrackingDetail",
        "message": "PACKAGE RESEARCH CASE CREATED 03542669",
        "description": null,
        "status": "unknown",
        "status_detail": "transit_exception",
        "datetime": "2019-10-24T12:29:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      },
      {
        "object": "TrackingDetail",
        "message": "PACKAGE RESEARCH CASE CLOSED 03542669",
        "description": null,
        "status": "unknown",
        "status_detail": "transit_exception",
        "datetime": "2019-10-24T13:22:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      },
      {
        "object": "TrackingDetail",
        "message": "PACKAGE RESEARCH CASE CREATED 03723239",
        "description": null,
        "status": "unknown",
        "status_detail": "transit_exception",
        "datetime": "2019-10-31T14:30:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      },
      {
        "object": "TrackingDetail",
        "message": "PACKAGE RESEARCH CASE CLOSED 03723239",
        "description": null,
        "status": "unknown",
        "status_detail": "transit_exception",
        "datetime": "2019-11-05T13:09:00Z",
        "source": "USPS",
        "carrier_code": null,
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "WEST PALM BEACH",
          "state": "FL",
          "country": "US",
          "zip": "33407"
        }
      }
    ],
    "carrier_detail": {
      "object": "CarrierDetail",
      "service": null,
      "container_type": null,
      "est_delivery_date_local": null,
      "est_delivery_time_local": null,
      "origin_location": "WEST PALM BEACH FL, US, 33407",
      "origin_tracking_location": {
        "object": "TrackingLocation",
        "city": "WEST PALM BEACH",
        "state": "FL",
        "country": "US",
        "zip": "33407"
      },
      "destination_location": null,
      "destination_tracking_location": null,
      "guaranteed_delivery_date": null,
      "alternate_identifier": null,
      "initial_delivery_attempt": null
    },
    "finalized": true,
    "is_return": false,
    "public_url": "https://track.easypost.com/djE6dHJrX2QxYjQ5NWE4Y2E2NjQ3OGJiYTUyMjVmODAyNzk5OGZj",
    "fees": []
  },
  "to_address": {
    "id": "adr_e706e6e6577c46989573608444092e3d",
    "object": "Address",
    "created_at": "2019-10-18T15:41:59Z",
    "updated_at": "2019-10-18T15:41:59Z",
    "name": "CHANTAL TELLENBACH",
    "company": "NEUROLITE AG",
    "street1": "HÜHNERHUBELSTRASSE 79",
    "street2": "ADMINISTRATION",
    "city": "BELP",
    "state": "BE",
    "zip": "3123",
    "country": "CH",
    "phone": "410318122",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 46.90493,
          "longitude": 7.4936,
          "time_zone": "Europe/Zurich"
        }
      }
    }
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_5d192578b7ac45809b7f4f6e6e9bb4f0",
    "object": "Address",
    "created_at": "2019-10-18T15:42:04Z",
    "updated_at": "2019-10-18T15:42:04Z",
    "name": null,
    "company": "Mavidon",
    "street1": "6625 White Dr",
    "street2": "",
    "city": "Riviera",
    "state": "FL",
    "zip": "33407",
    "country": "US",
    "phone": "5615852227",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_e706e6e6577c46989573608444092e3d",
    "object": "Address",
    "created_at": "2019-10-18T15:41:59Z",
    "updated_at": "2019-10-18T15:41:59Z",
    "name": "CHANTAL TELLENBACH",
    "company": "NEUROLITE AG",
    "street1": "HÜHNERHUBELSTRASSE 79",
    "street2": "ADMINISTRATION",
    "city": "BELP",
    "state": "BE",
    "zip": "3123",
    "country": "CH",
    "phone": "410318122",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 46.90493,
          "longitude": 7.4936,
          "time_zone": "Europe/Zurich"
        }
      }
    }
  },
  "object": "Shipment",
  "rates": [],
  "forms": [
    {
      "object": "Form",
      "created_at": "2019-10-18T15:42:30Z",
      "updated_at": "2019-10-18T15:42:30Z",
      "mode": "production",
      "form_type": "commercial_invoice",
      "form_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/form/20191018/f95923bf5ed94e8d977fef0878dffdaa.pdf",
      "submitted_electronically": true,
      "id": "form_4006e934b2f74045bb9763540ceeff7a"
    }
  ],
  "fees": [
    {
      "object": "Fee",
      "type": "LabelFee",
      "amount": "0.01000",
      "charged": true,
      "refunded": false
    },
    {
      "object": "Fee",
      "type": "PostageFee",
      "amount": "58.19000",
      "charged": true,
      "refunded": false
    }
  ],
  "id": "shp_6cc4b47375c54405bf7773ad64b30c64"
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
    carrier_accounts: [process.env.USPS],
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
