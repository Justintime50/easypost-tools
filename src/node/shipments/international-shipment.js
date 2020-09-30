const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const fromAddress = new api.Address({
    verify: ['delivery'],
    name: 'Dr. Steve Brule',
    street1: '179 N Harbor Dra',
    city: 'Redondo Beach',
    state: 'CA',
    zip: '90277',
    country: 'US',
    phone: '3331114444',
    email: 'dr_steve_brule@gmail.com',
});

const toAddress = new api.Address({
    company: 'EasyPost',
    name: 'TAKASHI KOVACS',
    street1: 'Columbusweg 33A',
    // street2: 'SUITE 325',
    city: 'Venlo',
    state: 'Limburg',
    zip: '5928',
    country: 'Netherlands',
    phone: '3331114444',
    email: 'email@email.com'
});

const parcel = new api.Parcel({
    length: 20.2,
    width: 10.9,
    height: 5,
    weight: 65.9
});

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
            'description': 'Sweet shirts 1',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            // 'hs_tariff_number': '654321',
            'origin_country': 'US',
            'code': '123'
        }),
    ]
});

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    // REFERENCE FOR INTERNATIONAL SHIPMENTS AND FORMS: https://easypost.zendesk.com/agent/tickets/257220
    options: {
        //address_validation_level: 1,
        //alcohol: true,
        // label_format: "PNG",
        //print_custom_1: "Here is a custom string on a label!",
        // hazmat: 'SECONDARY',
        /*payment: {
        type: "THIRD_PARTY",
        account: "ca_3bd616120603457fbed9deb1e425bbdc",
        country: "US",
        postal_code: "84057"
        }*/
        //special_rates_eligibility: "USPS.MEDIAMAIL",
        // incoterm: "DDP",
        // invoice_number: '123',
        // freight_charge: 19.99,
        // importer_address_id: 'adr_ff266521b9274244aff6ef6f07606f14', // Address to display on the commercial invoice
        // import_federal_tax_id: '',
    },
    customs_info: customsInfo,
    carrier_accounts: [process.env.DHL_EXPRESS], // If CANADA_POST, use TEST!
    // reference: "test",
});

shipment.save().then(console.log);
console.log("//===============================================================//");
