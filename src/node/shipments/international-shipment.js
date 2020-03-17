const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

var hrstart = process.hrtime(); // TODO: Fix benchmark timing

/* Either objects or ids can be passed in. If the object does
* not have an id, it will be created. */

/*
const toAddress = new api.Address({ ... });
const fromAddress = new api.Address({ ... });
const parcel = new api.Parcel({ ... });
const customsInfo = new api.CustomsInfo({ ... });
*/

const toAddress = new api.Address({
    //verify: ['delivery'],
    company: "Test",
    //name: 'Test',
    street1: '95 Yong An Road',
    //street2: '5th Floor',
    city: 'Beijing',
    //state: 'CH',
    zip: '100050',
    country: 'CH',
    phone: '3331114444',
    //email: 'support@easypost.com',
});

const fromAddress = new api.Address({
    //verify: ['delivery'],
    name: 'Dr. Steve Brule',
    street1: '179 N Harbor Dr',
    city: 'Redondo Beach',
    state: 'CA',
    zip: '90277',
    country: 'US',
    phone: '3331114444',
    email: 'dr_steve_brule@gmail.com',
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

const shipment = new api.Shipment({ 
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    options: {
        //address_validation_level: 1,
        //alcohol: true,
        label_format: "ZPL",
        //print_custom_1: "Here is a custom string on a label!",
        //hazmat: "LITHIUM",
        /*payment: {
        type: "THIRD_PARTY",
        account: "ca_3bd616120603457fbed9deb1e425bbdc",
        country: "US",
        postal_code: "84057"
        }*/
        //special_rates_eligibility: "USPS.MEDIAMAIL",
    },
    customs_info: customsInfo,
    carrier_accounts: [process.env.APC],
});

shipment.save().then(console.log);
console.log("//===============================================================//");
var hrend = process.hrtime(hrstart); // TODO: Fix benchmark timing
console.log("Execution time (hr): ", hrend[0], hrend[1]/1000000); // TODO: Fix benchmark timing
