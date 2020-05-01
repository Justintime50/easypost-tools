const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
const address = 'adr_d45ccbf44d4a4a9680df603f833dfbd3';
const shipment = 'shp_57038e9f0a2e4027929eb7005e27556a';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-04-21 10:30:00',
    max_datetime: '2020-04-22 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
    carrier_accounts: [process.env.FEDEX]
});

pickup.save().then(console.log).catch(console.log);
