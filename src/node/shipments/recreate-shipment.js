const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

// Assign JSON data to variable
const data = (

    // ENTER JSON DATA BELOW
    //===============================================================//

    {
        "created_at": "2021-01-20T02:54:07Z",
        "is_return": false,
        "messages": [],
        "mode": "production",
        "options": {
            "currency": "AUD",
            "invoice_number": "SH022367",
            "print_custom_1": "SH022367",
            "print_custom": [
                {
                    "value": "SH022367"
                }
            ],
            "payment": {
                "type": "SENDER"
            },
            "date_advance": 0
        },
        "reference": "SH022367-1",
        "status": "unknown",
        "tracking_code": "CH116480333AU",
        "updated_at": "2021-01-25T05:48:30Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": {
            "id": "cstinfo_f1cf589389274afe930b383552120a4c",
            "object": "CustomsInfo",
            "created_at": "2021-01-20T02:54:07Z",
            "updated_at": "2021-01-20T02:54:07Z",
            "contents_explanation": null,
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
                    "id": "cstitem_56145e96adc840a48080be325da7c9a9",
                    "object": "CustomsItem",
                    "created_at": "2021-01-20T02:54:07Z",
                    "updated_at": "2021-01-20T02:54:07Z",
                    "description": "Womens Superwarm X Skiff Suit",
                    "hs_tariff_number": "401590",
                    "origin_country": "CN",
                    "quantity": 2,
                    "value": "727.18",
                    "weight": 35.27,
                    "code": "SKF-1170-W-GRY-MMM",
                    "mode": "production",
                    "manufacturer": null,
                    "currency": "AUD",
                    "eccn": null
                }
            ]
        },
        "from_address": {
            "id": "adr_5b18de3602854cb399e8df672919972a",
            "object": "Address",
            "created_at": "2021-01-20T02:54:06+00:00",
            "updated_at": "2021-01-20T02:54:06+00:00",
            "name": "Zhik Pty Ltd",
            "company": null,
            "street1": "73 Whiting Street",
            "street2": "",
            "city": "Artarmon",
            "state": "NSW",
            "zip": "2064",
            "country": "AU",
            "phone": "610294209355",
            "email": "sales@zhik.com",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": {}
        },
        "insurance": null,
        "order_id": "order_f9257aca491143838c092e0ed87aa76c",
        "parcel": {
            "id": "prcl_d8193137b10646e5a66684ec37dc4849",
            "object": "Parcel",
            "created_at": "2021-01-20T02:54:06Z",
            "updated_at": "2021-01-20T02:54:06Z",
            "length": 9.84,
            "width": 11.81,
            "height": 3.94,
            "predefined_package": null,
            "weight": 35.27,
            "mode": "production"
        },
        "postage_label": {
            "object": "PostageLabel",
            "id": "pl_0eec9a311d3d4cd9830cf4fa22d8634b",
            "created_at": "2021-01-20T02:55:46Z",
            "updated_at": "2021-01-20T02:55:54Z",
            "date_advance": 0,
            "integrated_form": "none",
            "label_date": "2021-01-20T02:55:46Z",
            "label_resolution": 200,
            "label_size": "8.5x11",
            "label_type": "default",
            "label_file_type": "image/png",
            "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20210120/899a6c3a9de848f296389ebc5bbf56c1.png",
            "label_pdf_url": null,
            "label_zpl_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20210120/beadb582be764f67885fcd6cc0eda87d.zpl",
            "label_epl2_url": null,
            "label_file": null
        },
        "refund_status": "refunded",
        "scan_form": null,
        "selected_rate": {
            "id": "rate_8b33b3a7ff75400a9f12022203246b6b",
            "object": "Rate",
            "created_at": "2021-01-20T02:55:46Z",
            "updated_at": "2021-01-20T02:55:46Z",
            "mode": "production",
            "service": "IntlStandardPackTrack",
            "carrier": "AustraliaPost",
            "rate": "49.70",
            "currency": "AUD",
            "retail_rate": null,
            "retail_currency": null,
            "list_rate": null,
            "list_currency": null,
            "delivery_days": 9,
            "delivery_date": null,
            "delivery_date_guaranteed": null,
            "est_delivery_days": 9,
            "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
            "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273"
        },
        "tracker": {
            "id": "trk_ef7716f58d264cc99a865d77da1f0a00",
            "object": "Tracker",
            "mode": "production",
            "tracking_code": "CH116480333AU",
            "status": "unknown",
            "status_detail": "unknown",
            "created_at": "2021-01-20T02:55:47Z",
            "updated_at": "2021-02-02T05:40:23Z",
            "signed_by": null,
            "weight": null,
            "est_delivery_date": null,
            "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
            "carrier": "AustraliaPost",
            "tracking_details": [],
            "fees": [],
            "carrier_detail": null,
            "public_url": "https://track.easypost.com/djE6dHJrX2VmNzcxNmY1OGQyNjRjYzk5YTg2NWQ3N2RhMWYwYTAw"
        },
        "to_address": {
            "id": "adr_1c76f7c7d2e640eb9dda19d703601e39",
            "object": "Address",
            "created_at": "2021-01-20T02:54:06+00:00",
            "updated_at": "2021-01-20T02:54:06+00:00",
            "name": "Santiago Soffia",
            "company": null,
            "street1": "Mahuida Contry Polo Club",
            "street2": "cas26",
            "city": "Chicureo",
            "state": null,
            "zip": "9340000",
            "country": "CL",
            "phone": "123456789",
            "email": "test@email.com",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": {
                "zip4": {
                    "success": false,
                    "errors": [
                        {
                            "code": "E.HOUSE_NUMBER.INVALID",
                            "field": "street1",
                            "message": "House number is invalid",
                            "suggestion": null
                        },
                        {
                            "code": "E.STREET.INVALID",
                            "field": "street1",
                            "message": "Street is invalid",
                            "suggestion": "Calle Mahuida Contry Polo Club"
                        }
                    ],
                    "details": null
                },
                "delivery": {
                    "success": false,
                    "errors": [
                        {
                            "code": "E.HOUSE_NUMBER.INVALID",
                            "field": "street1",
                            "message": "House number is invalid",
                            "suggestion": null
                        },
                        {
                            "code": "E.STREET.INVALID",
                            "field": "street1",
                            "message": "Street is invalid",
                            "suggestion": "Calle Mahuida Contry Polo Club"
                        }
                    ],
                    "details": {}
                }
            }
        },
        "usps_zone": 8,
        "return_address": {
            "id": "adr_5b18de3602854cb399e8df672919972a",
            "object": "Address",
            "created_at": "2021-01-20T02:54:06+00:00",
            "updated_at": "2021-01-20T02:54:06+00:00",
            "name": "Zhik Pty Ltd",
            "company": null,
            "street1": "73 Whiting Street",
            "street2": "",
            "city": "Artarmon",
            "state": "NSW",
            "zip": "2064",
            "country": "AU",
            "phone": "610294209355",
            "email": "sales@zhik.com",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": {}
        },
        "buyer_address": {
            "id": "adr_1c76f7c7d2e640eb9dda19d703601e39",
            "object": "Address",
            "created_at": "2021-01-20T02:54:06+00:00",
            "updated_at": "2021-01-20T02:54:06+00:00",
            "name": "Santiago Soffia",
            "company": null,
            "street1": "Mahuida Contry Polo Club",
            "street2": "cas26",
            "city": "Chicureo",
            "state": null,
            "zip": "9340000",
            "country": "CL",
            "phone": "123456789",
            "email": "test@email.com",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": {
                "zip4": {
                    "success": false,
                    "errors": [
                        {
                            "code": "E.HOUSE_NUMBER.INVALID",
                            "field": "street1",
                            "message": "House number is invalid",
                            "suggestion": null
                        },
                        {
                            "code": "E.STREET.INVALID",
                            "field": "street1",
                            "message": "Street is invalid",
                            "suggestion": "Calle Mahuida Contry Polo Club"
                        }
                    ],
                    "details": null
                },
                "delivery": {
                    "success": false,
                    "errors": [
                        {
                            "code": "E.HOUSE_NUMBER.INVALID",
                            "field": "street1",
                            "message": "House number is invalid",
                            "suggestion": null
                        },
                        {
                            "code": "E.STREET.INVALID",
                            "field": "street1",
                            "message": "Street is invalid",
                            "suggestion": "Calle Mahuida Contry Polo Club"
                        }
                    ],
                    "details": {}
                }
            }
        },
        "object": "Shipment",
        "rates": [
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntlEconomyAirmailParcels",
                "carrier": "AustraliaPost",
                "rate": "35.95",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": null,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": null,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_7c2b7e921d534d37941af0b81944e5ec"
            },
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntlExpressDocsEciDocs",
                "carrier": "AustraliaPost",
                "rate": "79.45",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": 8,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": 8,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_899b5ca218524a839ffd1260b2ae1d7d"
            },
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntlStandardPackTrack",
                "carrier": "AustraliaPost",
                "rate": "49.70",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": 9,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": 9,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_8b33b3a7ff75400a9f12022203246b6b"
            },
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntLStandardWithSignature",
                "carrier": "AustraliaPost",
                "rate": "54.20",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": 9,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": 9,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_f97c7d223e1948e38099c5e5d7b8a181"
            },
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntlExpressMerchEciMerch",
                "carrier": "AustraliaPost",
                "rate": "65.90",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": 8,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": 8,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_da535038850447d9b398cb54061ebea6"
            },
            {
                "object": "Rate",
                "created_at": "2021-01-20T02:54:09Z",
                "updated_at": "2021-01-20T02:54:09Z",
                "mode": "production",
                "service": "IntlEconomyWSodRegdPost",
                "carrier": "AustraliaPost",
                "rate": "40.45",
                "currency": "AUD",
                "retail_rate": null,
                "retail_currency": null,
                "list_rate": null,
                "list_currency": null,
                "delivery_days": null,
                "delivery_date": null,
                "delivery_date_guaranteed": null,
                "est_delivery_days": null,
                "shipment_id": "shp_908531443ad746ab83e92cc8f8618971",
                "carrier_account_id": "ca_fea7a7c6733d458d9c27e7f0c4a03273",
                "id": "rate_9d529ae6ae904332900422ffc6f008ca"
            }
        ],
        "forms": [
            {
                "object": "Form",
                "created_at": "2021-01-20T02:55:47Z",
                "updated_at": "2021-01-20T02:55:47Z",
                "mode": "production",
                "form_type": "commercial_invoice",
                "form_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/form/20210120/5c73f223e4f4446aad4e1bba2f5620f5.pdf",
                "submitted_electronically": null,
                "id": "form_8577a0ead6084b47af4a6f240e18f49f"
            }
        ],
        "fees": [
            {
                "object": "Fee",
                "type": "LabelFee",
                "amount": "0.00000",
                "charged": true,
                "refunded": true
            }
        ],
        "id": "shp_908531443ad746ab83e92cc8f8618971"
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
}
if (data.customs_info) {
    delete data.customs_info.id
    delete data.customs_info.created_at
    delete data.customs_info.mode
    delete data.customs_info.updated_at
    for (let i = 0; i < data.customs_info.customs_items.length; i++) {
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
    carrier_accounts: [process.env.DEVVM_AUSTRALIA_POST], // If CANADA_POST, use TEST!
    // reference: 'test-reference'
    // is_return: true
});

// Print the results to console
console.log("//===============================================================//");
shipment.save().then(console.log).catch(console.log);
