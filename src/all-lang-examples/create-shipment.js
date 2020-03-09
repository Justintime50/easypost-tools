const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

var hrstart = process.hrtime(); // TODO: Fix benchmark timing

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
    name: 'TAKASHI KOVACS',
    street1: '2889 W ASHTON BLVD',
    street2: 'SUITE 325',
    city: 'Lehi',
    state: 'UT',
    zip: '84042',
    country: 'US',
    phone: '3331114444',
    email: 'email@email.com'
  },
  from_address: {
    name: 'EasyPost',
    street1: '417 Montgomery Street',
    street2: '5th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    country: 'US',
    phone: '3331114444',
    email: 'support@easypost.com'
  },
  parcel: {
    length: 20.2,
    width: 10.9,
    height: 5,
    weight: 65.9
  },
  //options: {
  //},
  //reference: "test",
  carrier_accounts: [process.env.LSO],
});


shipment.save().then(console.log);
var hrend = process.hrtime(hrstart); // TODO: Fix benchmark timing
console.log("Execution time (hr): ", hrend[0], hrend[1]/1000000); // TODO: Fix benchmark timing
