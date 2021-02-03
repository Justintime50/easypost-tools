const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const dad = require('dad-tool');

// Setup EasyPost API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

// Setup addresses from dad
const dadFrom = dad.random('AU_VT');
const dadTo = dad.random('US_UT');

// Setup static variables
const name = 'Jack Sparrow';
const company = 'Fake Company';
const phone = '8015551234';
const email = 'email@example.com';
const number = Number((Math.random() * (10.00 - 5.00) + 1.00).toFixed(2));


const customsInfo = new api.CustomsInfo({
    // eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: 'test explanation',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    declaration: 'Here is a bunch of information...',


    /* customs_items can be passed in as instances or ids.
    *  if the item does not have an id, it will be created. */
    customs_items: [
        new api.CustomsItem({
            'description': 'Sweet shirts',
            'quantity': 20,
            'weight': 35.27,
            'value': 727.18,
            'hs_tariff_number': '654321',
            'origin_country': 'GB',
            'code': '123'
        }),
    ]
});


// Create Shipment
const shipment = new api.Shipment({
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
    parcel: {
        length: number,
        width: number,
        height: number,
        weight: 35.27,
        // predefined_package: "MediumFlatRateBox"
    },
    customs_info: customsInfo,
    carrier_accounts: [process.env.DEVVM_AUSTRALIA_POST], // If CANADA_POST, use TEST!
    options: {
        //     incoterm: 'DDP',
        // delivery_confirmation: "NO_SIGNATURE",
        // label_date: "2020-10-16T20:04:42Z",
        // label_size: "8.5x11",
        // print_custom_1: "123",
        // print_custom_1_code: "IK",
        // label_format: "PDF",
        // delivery_confirmation: "SIGNATURE",
        // postage_label_inline: true
        // handling_instructions: 'test instructions',
        // settlement_method: 'CREDIT_CARD'
    },
    // service: "GROUND_HOME_DELIVERY",
    // carrier: "FedEx",
    // is_return: true,
    reference: 'test',
});

shipment.save().then(console.log).catch(console.log);
