const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */

/*
const toAddress = new api.Address({ 'id': 'adr_d739b50e314e48e09c3aab05b4179893' });
const fromAddress = new api.Address({ 'id': 'adr_d739b50e314e48e09c3aab05b4179893' });
const parcel = new api.Parcel({ 'id': 'prcl_76800e31b2c74a408c1132d19f19014a' });
// const customsInfo = new api.CustomsInfo({ ... });

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  //options: {
  //  alcohol: true,
  //},
  //customs_info: customsInfo
  carrier_accounts: [process.env.DPD],
});
*/

const shipment = new api.Shipment({
  to_address: {
    verify: ['delivery'],
    street1: '417 MONTGOMERY ST',
    street2: 'FLOOR 5',
    city: 'SAN FRANCISCO',
    state: 'CA',
    zip: '94104',
    country: 'US',
    company: 'EasyPost',
    phone: '415-123-4567',
  },
  from_address: {
    company: 'Connexbox',
    street1: '417 MONTGOMERY ST',
    street2: 'FLOOR 5',
    city: 'SAN FRANCISCO',
    state: 'CA',
    zip: '94104',
    country: 'US',
    company: 'EasyPost',
    phone: '415-123-4567',
  },
  parcel: {
    length: 7.31,
    width: 7.31,
    height: 1.75,
    weight: 4.09
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
  // },
  reference: "test",
  carrier_accounts: [process.env.PARCEL_FORCE],
  // to_address: {"id":"adr_9d4a9b0f9e0340f3bc1f43aabb4f7ef3"},
  // from_address: {"id":"adr_b53dcfc1fab2440b96d21138c95eb08c"},
});

shipment.save().then(console.log).catch(console.log);
