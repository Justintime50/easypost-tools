const Easypost = require('@easypost/api')
const dotenv = require('dotenv')
const dad = require('dad-tool');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

// Setup addresses from dad
const dadFrom = dad.random('AU_VT');
const dadTo = dad.random('AU_VT');

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
    // eel_pfc: 'NOEEI 30.37(a)',
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

const options = {
    // incoterm: "DDP",
    // importer_address_id: 'adr_ff266521b9274244aff6ef6f07606f14',
    // print_custom_1: 'Contact agent below \n to process customer clearance.',
    // commercial_invoice_format: 'PNG',
    // payment: {
    //     type: 'THIRD_PARTY',
    //     account: '',
    //     country: '',
    //     postal_code: '',
    // },
    // duty_payment_account: '',
    label_size: '4x6',
};

const order = new api.Order({
    to_address: {
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
            // options,
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
            // options,
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
            // options,
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
            // options,
        })
    ],
    carrier_accounts: [{ id: process.env.DEVVM_AUSTRALIA_POST }],
    // service: "DomesticExpress",
    customs_info: customsInfo,
    // options,
});

order.save().then(console.log).catch(console.log);
