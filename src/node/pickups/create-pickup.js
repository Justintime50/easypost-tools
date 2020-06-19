const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
const address = 'adr_b173caa129e44bb28f9454b7d9f63467';
const shipment = 'shp_2b44f9e8e32642f4abe07697ff33b795';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-05-21 10:30:00',
    max_datetime: '2020-05-22 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
    carrier_accounts: [process.env.UPS]
});

pickup.save().then(console.log).catch(console.log);
