const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.DEVVM_PROD_API_KEY, {
  baseUrl: 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
});

// Assign JSON data to variable
const data = (

  // ENTER JSON DATA BELOW
  //===============================================================//

  {
    "created_at": "2020-09-01T21:17:33Z",
    "is_return": false,
    "messages": [
      {
        "type": "rate_error",
        "carrier": "USPS",
        "message": "Unable to retrieve USPS rates for non-US origin address."
      }
    ],
    "mode": "production",
    "options": {
      "label_size": "4X6",
      "label_format": "ZPL",
      "print_custom_1": "Order# 61000208",
      "incoterm": "DDP",
      "commercial_invoice_format": "PNG",
      "freight_charge": 0,
      "currency": "USD",
      "delivered_duty_paid": true,
      "print_custom": [
        {
          "value": "Order# 61000208"
        }
      ],
      "payment": {
        "type": "SENDER"
      },
      "date_advance": 0
    },
    "reference": null,
    "status": "unknown",
    "tracking_code": null,
    "updated_at": "2020-09-01T21:17:36Z",
    "batch_id": null,
    "batch_status": null,
    "batch_message": null,
    "customs_info": {
      "id": "cstinfo_6902d263ad35443b8313705cab0ad25a",
      "object": "CustomsInfo",
      "created_at": "2020-09-01T21:17:32Z",
      "updated_at": "2020-09-01T21:17:32Z",
      "contents_explanation": "Footwear / SKU: BZ0220, Name: NMD_R1 Primeknit, Size: 10.0",
      "contents_type": "other",
      "customs_certify": false,
      "customs_signer": "1661 Inc",
      "eel_pfc": "",
      "non_delivery_option": "return",
      "restriction_comments": null,
      "restriction_type": "none",
      "mode": "production",
      "declaration": null,
      "customs_items": [
        {
          "id": "cstitem_6b78572cc7cc492bb1abefef76fb4887",
          "object": "CustomsItem",
          "created_at": "2020-09-01T21:17:32Z",
          "updated_at": "2020-09-01T21:17:32Z",
          "description": "ECCN: EAR99, Footwear",
          "hs_tariff_number": "6403.91",
          "origin_country": "VN",
          "quantity": 1,
          "value": "225.0",
          "weight": 57,
          "code": null,
          "mode": "production",
          "manufacturer": null,
          "currency": null
        }
      ]
    },
    "from_address": {
      "id": "adr_621157ccdad64408b4776ba1678713df",
      "object": "Address",
      "created_at": "2020-09-01T21:17:31Z",
      "updated_at": "2020-09-01T21:17:31Z",
      "name": "Shipping Dept",
      "company": "1661 Inc",
      "street1": "9/F, Goodman Tsuen Wan Centre",
      "street2": "68 Wang Lung Street",
      "city": "Tsuen Wan",
      "state": "NT",
      "zip": "00000",
      "country": "HK",
      "phone": "3102998211",
      "email": "info@goat.com",
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
      "id": "prcl_3de4068c14b941ea8f805500b64fda4c",
      "object": "Parcel",
      "created_at": "2020-09-01T21:17:33Z",
      "updated_at": "2020-09-01T21:17:33Z",
      "length": 14,
      "width": 10,
      "height": 6,
      "predefined_package": null,
      "weight": 57,
      "mode": "production"
    },
    "postage_label": null,
    "refund_status": null,
    "scan_form": null,
    "selected_rate": null,
    "tracker": null,
    "to_address": {
      "id": "adr_4b74a40ffeeb4b0592c8feba5735b9d1",
      "object": "Address",
      "created_at": "2020-09-01T21:17:30Z",
      "updated_at": "2020-09-01T21:17:30Z",
      "name": "Luv Manwani",
      "company": null,
      "street1": "1306 Pescador Way",
      "street2": null,
      "city": "Oxnard",
      "state": "CA",
      "zip": "93030-6180",
      "country": "US",
      "phone": "8057583859",
      "email": "luv.manwani21@gmail.com",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": {}
    },
    "usps_zone": null,
    "return_address": {
      "id": "adr_621157ccdad64408b4776ba1678713df",
      "object": "Address",
      "created_at": "2020-09-01T21:17:31Z",
      "updated_at": "2020-09-01T21:17:31Z",
      "name": "Shipping Dept",
      "company": "1661 Inc",
      "street1": "9/F, Goodman Tsuen Wan Centre",
      "street2": "68 Wang Lung Street",
      "city": "Tsuen Wan",
      "state": "NT",
      "zip": "00000",
      "country": "HK",
      "phone": "3102998211",
      "email": "info@goat.com",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": {}
    },
    "buyer_address": {
      "id": "adr_4b74a40ffeeb4b0592c8feba5735b9d1",
      "object": "Address",
      "created_at": "2020-09-01T21:17:30Z",
      "updated_at": "2020-09-01T21:17:30Z",
      "name": "Luv Manwani",
      "company": null,
      "street1": "1306 Pescador Way",
      "street2": null,
      "city": "Oxnard",
      "state": "CA",
      "zip": "93030-6180",
      "country": "US",
      "phone": "8057583859",
      "email": "luv.manwani21@gmail.com",
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
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "INTERNATIONAL_ECONOMY",
        "carrier": "FedEx",
        "rate": "32.00",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": "220.07",
        "list_currency": "USD",
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": false,
        "est_delivery_days": null,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_5b8183cb4d59416191ccbab1df3e08d1",
        "id": "rate_b1b56165679644fe87556a768e8ae637"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "INTERNATIONAL_FIRST",
        "carrier": "FedEx",
        "rate": "314.11",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": "314.11",
        "list_currency": "USD",
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": false,
        "est_delivery_days": null,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_5b8183cb4d59416191ccbab1df3e08d1",
        "id": "rate_c9be4fb580494260973ef827c597767e"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "INTERNATIONAL_PRIORITY",
        "carrier": "FedEx",
        "rate": "38.58",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": "263.94",
        "list_currency": "USD",
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": false,
        "est_delivery_days": null,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_5b8183cb4d59416191ccbab1df3e08d1",
        "id": "rate_8c8ea5540b0d43e0bc5d6f9219a2c862"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "MedicalExpressNonDoc",
        "carrier": "DHLExpress",
        "rate": "262.57",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": 3,
        "delivery_date": "2020-09-04T00:00:00Z",
        "delivery_date_guaranteed": null,
        "est_delivery_days": 3,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_78a71ced1c1a48f785b930ae8a052d5b",
        "id": "rate_dcf769f4e755402a821c7bba7ba2948f"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "Express1030NonDoc",
        "carrier": "DHLExpress",
        "rate": "37.45",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": 3,
        "delivery_date": "2020-09-04T00:00:00Z",
        "delivery_date_guaranteed": null,
        "est_delivery_days": 3,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_78a71ced1c1a48f785b930ae8a052d5b",
        "id": "rate_4e5088ceda414877b0ea8145c500328a"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "Express1200NonDoc",
        "carrier": "DHLExpress",
        "rate": "32.18",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": 3,
        "delivery_date": "2020-09-04T00:00:00Z",
        "delivery_date_guaranteed": null,
        "est_delivery_days": 3,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_78a71ced1c1a48f785b930ae8a052d5b",
        "id": "rate_c24973dc46b0416faf70a7efa1f06f85"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "ExpressWorldwideNonDoc",
        "carrier": "DHLExpress",
        "rate": "26.90",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": 3,
        "delivery_date": "2020-09-04T00:00:00Z",
        "delivery_date_guaranteed": null,
        "est_delivery_days": 3,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_78a71ced1c1a48f785b930ae8a052d5b",
        "id": "rate_9273d5b6287f4309bb74d35324543211"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "eCommerce Express Tracked",
        "carrier": "OmniParcel",
        "rate": "38.17",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": null,
        "est_delivery_days": null,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_72bd26af563b4b0ebc8eb0fc42d8db23",
        "id": "rate_c2f39f8a3c0848e98aadb5a03e7ed746"
      },
      {
        "object": "Rate",
        "created_at": "2020-09-01T21:17:36Z",
        "updated_at": "2020-09-01T21:17:36Z",
        "mode": "production",
        "service": "eCommerce Standard Tracked",
        "carrier": "OmniParcel",
        "rate": "38.17",
        "currency": "USD",
        "retail_rate": null,
        "retail_currency": null,
        "list_rate": null,
        "list_currency": null,
        "delivery_days": null,
        "delivery_date": null,
        "delivery_date_guaranteed": null,
        "est_delivery_days": null,
        "shipment_id": "shp_0a39c26a8d4a4771b5598ad98740d07c",
        "carrier_account_id": "ca_72bd26af563b4b0ebc8eb0fc42d8db23",
        "id": "rate_c642167d4a7a492e8bc994b00dab6d4e"
      }
    ],
    "forms": [],
    "fees": [],
    "id": "shp_0a39c26a8d4a4771b5598ad98740d07c"
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

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  from_address: data.from_address,
  parcel: data.parcel,
  options: data.options,
  customs_info: data.customs_info,
  // service: "Xpresspost",
  // carrier: "CanadaPost",
  // label_format: "PDF",
  carrier_accounts: [process.env.DEVVM_T25999], // If CANADA_POST, use TEST!
  reference: 'test-reference'
  // is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
