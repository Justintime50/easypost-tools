const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY, {
    baseUrl: prod,
});

const shipment = new api.Shipment({
    to_address: {
        // verify: ['delivery'],
        street1: 'WAKRAH ZONE 90 STREET 969 BULDING 71',
        // street2: 'FLOOR 5',
        city: 'Wakrah',
        state: 'CA',
        zip: '80714',
        country: 'QA',
        company: 'EasyPost',
        phone: '415-123-4567',
        email: 'test@example.com'
    },
    from_address: {
        street1: '179 N Harbor Dr',
        // street2: 'FLOOR 5',
        state: 'London',
        city: 'Egham',
        zip: 'TW20 8EY',
        country: 'GB',
        company: 'EasyPost',
        phone: '415-123-4567',
        email: 'test@example.com'
    },
    parcel: {
        length: 8,
        width: 5,
        height: 5,
        weight: 5
    },
    customs_info: {
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
                'description': 'Sweet shirts 1',
                'quantity': 2,
                'weight': 11,
                'value': 23,
                'hs_tariff_number': '654321',
                'origin_country': 'US',
                'code': '123'
            }),
        ]
    },
    // options: {
    //   // alcohol: true
    // delivery_confirmation: 'ADULT_SIGNATURE',
    // //   print_custom: [
    // //     {
    // //         name: "barcode_title",
    // //         value: "title"
    // //     },
    // //     {
    // //         name: "barcode",
    // //         value: "123456"
    // //     },
    // //     {
    // //         name: "barcode_symbology",
    // //         value: "CODE128B"
    // //     }
    // // ],
    // label_format: 'PNG', // only seems to work with ZPL format
    // label_size: '4x6'
    // cost_center: '0009',
    // },
    reference: "test",
    carrier_accounts: [process.env.ARAMEX], // If CANADA_POST, use TEST!
    // is_return: true,
    // to_address: {"id":"adr_9d4a9b0f9e0340f3bc1f43aabb4f7ef3"},
    // from_address: {"id":"adr_b53dcfc1fab2440b96d21138c95eb08c"},
});

shipment.save().then(console.log).catch(console.log);
