const Easypost = require('@easypost/api')
const dotenv = require('dotenv')
const dad = require('dad-tool');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

// Setup addresses from dad
const dadTo = dad.random('EU_UK');
const dadFrom = dad.random('US_UT');

// Setup static variables
const name = 'Jake Peralta';
const company = 'EasyPost';
const phone = '8015551234';
const email = 'email@example.com';
const number = Number((Math.random() * (10.00 - 1.00) + 1.00).toFixed(2));

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */

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
    *  if the item does not have an id, it will be created. */
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

const order = new api.Order({
    to_address: {
        verify: ['delivery'],
        company,
        name,
        street1: dadTo.street1,
        street2: dadTo.street2,
        city: dadTo.city,
        state: dadTo.state,
        zip: dadTo.zip,
        country: dadTo.country,
        phone,
        email
    },
    from_address: {
        company,
        name,
        street1: dadFrom.street1,
        street2: dadFrom.street2,
        city: dadFrom.city,
        state: dadFrom.state,
        zip: dadFrom.zip,
        country: dadFrom.country,
        phone,
        email
    },
    shipments: [
        new api.Shipment({
            parcel: {
                length: number,
                width: number,
                height: number,
                weight: 11
            },
            reference: "order-test",
            customs_info: customsInfo,
            options: {
                incoterm: "DDP",
                importer_address_id: 'adr_ff266521b9274244aff6ef6f07606f14',
            },
        }),
        new api.Shipment({
            parcel: {
                length: number,
                width: number,
                height: number,
                weight: 11
            },
            reference: "order-test",
            customs_info: customsInfo,
            options: {
                incoterm: "DDP",
                importer_address_id: 'adr_ff266521b9274244aff6ef6f07606f14',
            },
        })
    ],
    carrier_accounts: [{ id: process.env.FEDEX }],
    // service: "2ndDayAir",
    customs_info: customsInfo,
    options: {
        incoterm: "DDP",
        importer_address_id: 'adr_ff266521b9274244aff6ef6f07606f14',
    },
});

order.save().then(console.log);
