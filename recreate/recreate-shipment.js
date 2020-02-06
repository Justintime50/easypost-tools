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
  "created_at": "2020-02-06T17:53:20Z",
  "is_return": false,
  "messages": [
    {
      "type": "rate_error",
      "carrier": "USPS",
      "message": "USPS does not permit the shipment of alcohol."
    }
  ],
  "mode": "test",
  "options": {
    "alcohol": true,
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": null,
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-06T17:53:22Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_b128368d0c884eaea2bcfc30ea640cc5",
    "object": "Address",
    "created_at": "2020-02-06T17:53:20Z",
    "updated_at": "2020-02-06T17:53:20Z",
    "name": "EASYPOST",
    "company": null,
    "street1": "417 MONTGOMERY ST STE 500",
    "street2": "5TH FLOOR",
    "city": "SAN FRANCISCO",
    "state": "CA",
    "zip": "94104-1100",
    "country": "US",
    "phone": "3331114444",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 37.79298,
          "longitude": -122.40288,
          "time_zone": "America/Los_Angeles"
        }
      }
    }
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_a57e581efe7e4009934fc75c94a60022",
    "object": "Parcel",
    "created_at": "2020-02-06T17:53:20Z",
    "updated_at": "2020-02-06T17:53:20Z",
    "length": 20.2,
    "width": 10.9,
    "height": 5,
    "predefined_package": null,
    "weight": 65.9,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_4f574b2d95fd4618b93e3bd35d3ff794",
    "object": "Address",
    "created_at": "2020-02-06T17:53:19Z",
    "updated_at": "2020-02-06T17:53:19Z",
    "name": "DR. STEVE BRULE",
    "company": null,
    "street1": "179 N HARBOR DR",
    "street2": "",
    "city": "REDONDO BEACH",
    "state": "CA",
    "zip": "90277-2506",
    "country": "US",
    "phone": "3331114444",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 33.84446,
          "longitude": -118.39275,
          "time_zone": "America/Los_Angeles"
        }
      }
    }
  },
  "usps_zone": 4,
  "return_address": {
    "id": "adr_b128368d0c884eaea2bcfc30ea640cc5",
    "object": "Address",
    "created_at": "2020-02-06T17:53:20Z",
    "updated_at": "2020-02-06T17:53:20Z",
    "name": "EASYPOST",
    "company": null,
    "street1": "417 MONTGOMERY ST STE 500",
    "street2": "5TH FLOOR",
    "city": "SAN FRANCISCO",
    "state": "CA",
    "zip": "94104-1100",
    "country": "US",
    "phone": "3331114444",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 37.79298,
          "longitude": -122.40288,
          "time_zone": "America/Los_Angeles"
        }
      }
    }
  },
  "buyer_address": {
    "id": "adr_4f574b2d95fd4618b93e3bd35d3ff794",
    "object": "Address",
    "created_at": "2020-02-06T17:53:19Z",
    "updated_at": "2020-02-06T17:53:19Z",
    "name": "DR. STEVE BRULE",
    "company": null,
    "street1": "179 N HARBOR DR",
    "street2": "",
    "city": "REDONDO BEACH",
    "state": "CA",
    "zip": "90277-2506",
    "country": "US",
    "phone": "3331114444",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {
      "delivery": {
        "success": true,
        "errors": [],
        "details": {
          "latitude": 33.84446,
          "longitude": -118.39275,
          "time_zone": "America/Los_Angeles"
        }
      }
    }
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "FIRST_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "142.49",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "142.49",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-02-07T08:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_7170e2389a7c42f1a338f08a49aeb60b"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "PRIORITY_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "51.56",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "110.99",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-02-07T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_18248cc8c39e4e0e8f6b7d2df9462fe5"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "STANDARD_OVERNIGHT",
      "carrier": "FedEx",
      "rate": "106.22",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "106.22",
      "list_currency": "USD",
      "delivery_days": 1,
      "delivery_date": "2020-02-07T15:00:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_9c3ca7c4dbfb4862885b8928ec2dda7e"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "FEDEX_2_DAY_AM",
      "carrier": "FedEx",
      "rate": "46.19",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "46.19",
      "list_currency": "USD",
      "delivery_days": 4,
      "delivery_date": "2020-02-10T10:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 4,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_7e1ec614308243e8b66241a1ea794645"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "FEDEX_2_DAY",
      "carrier": "FedEx",
      "rate": "42.36",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "42.36",
      "list_currency": "USD",
      "delivery_days": 4,
      "delivery_date": "2020-02-10T16:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 4,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_3d02fa193c1e45c383a23cf15becd4dd"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "FEDEX_GROUND",
      "carrier": "FedEx",
      "rate": "20.67",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "20.67",
      "list_currency": "USD",
      "delivery_days": 2,
      "delivery_date": "2020-02-10T23:59:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_f734634c88134b1a8809520b18dcfe89"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-06T17:53:22Z",
      "updated_at": "2020-02-06T17:53:22Z",
      "mode": "test",
      "service": "FEDEX_EXPRESS_SAVER",
      "carrier": "FedEx",
      "rate": "37.13",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": "37.13",
      "list_currency": "USD",
      "delivery_days": 5,
      "delivery_date": "2020-02-11T16:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 5,
      "shipment_id": "shp_59ed3f273f5c4fb99e668e431cc32655",
      "carrier_account_id": "ca_8eab449d7e16499b9cd3d583fb3649fd",
      "id": "rate_86e133ce9977404e950f10f15cf130cc"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_59ed3f273f5c4fb99e668e431cc32655"
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
});

// Print the results to console
shipment.save().then(console.log);
