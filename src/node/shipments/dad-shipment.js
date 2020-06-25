const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const dad = require('dad-tool');

// Setup EasyPost API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Setup addresses from dad
const dadTo = dad.random('US_UT');
const dadFrom = dad.random('US_UT');

// Setup static variables
const name = 'Jack Sparrow';
const company = '-';
const phone = '8015551234';
const email = 'email@example.com';
const number = Number((Math.random() * (10.00 - 1.00) + 1.00).toFixed(2));


const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    declaration: 'Here is a bunch of information...',


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
        }),
        new api.CustomsItem({
            'description': 'Sweet shirts 2',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        }),
        new api.CustomsItem({
            'description': 'Sweet shirts 3',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        }),
        new api.CustomsItem({
            'description': 'Sweet shirts 4',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        }),
        new api.CustomsItem({
            'description': 'Sweet shirts 5',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        }),
    ]
});


// Create Shipment
const shipment = new api.Shipment({
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
    parcel: {
        length: number,
        width: number,
        height: number,
        weight: 100,
        // predefined_package: "MediumFlatRateBox"
    },
    // customs_info: customsInfo,
    carrier_accounts: [process.env.FEDEX], // If CANADA_POST, use TEST!
    options: {
        //     // delivery_confirmation: "NO_SIGNATURE",
        // label_date: "2020-05-01",
        //     label_size: "7x3",
        // print_custom_1: "123",
        // print_custom_1_code: "IK",
        // label_format: "PNG",
        // delivery_confirmation: "SIGNATURE",
        //     postage_label_inline: true
        handling_instructions: 'test instructions',
        // settlement_method: 'CREDIT_CARD'
    },
    service: "GROUND_HOME_DELIVERY",
    carrier: "FedEx",
});

shipment.save().then(console.log).catch(console.log);
