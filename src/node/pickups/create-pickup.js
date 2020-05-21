const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
const address = 'adr_5b036c03aec14ea0b78a8d1743c9b862';
const shipment = 'shp_de257284cff84cfabf6751300f53c14c';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-05-21 10:30:00',
    max_datetime: '2020-05-22 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
    carrier_accounts: [process.env.USPS]
});

pickup.save().then(console.log).catch(console.log);
