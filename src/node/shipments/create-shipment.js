const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

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
    street1: '179 N Harbor Dr',
    street2: 'FLOOR 5',
    city: 'SAN FRANCISCO',
    state: 'CA',
    zip: '94104',
    country: 'US',
    company: 'EasyPost',
    phone: '415-123-4567',
  },
  parcel: {
    length: 8,
    width: 3,
    height: 0.125,
    weight: 0.125
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
  carrier_accounts: [process.env.DHL_ECOMMERCE], // If CANADA_POST, use TEST!
  // is_return: true,
  // to_address: {"id":"adr_9d4a9b0f9e0340f3bc1f43aabb4f7ef3"},
  // from_address: {"id":"adr_b53dcfc1fab2440b96d21138c95eb08c"},
});

shipment.save().then(console.log).catch(console.log);
