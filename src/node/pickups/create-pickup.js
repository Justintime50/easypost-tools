const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
const address = 'adr_a2a3ccb1b7554178a112dfebde0724a5';
const shipment = 'shp_b57c762120dc4f4ab23b296412dd260d';

const pickup = new api.Pickup({
  address,
  shipment,
  reference: 'my-first-pickup',
  min_datetime: '2020-03-21 10:30:00',
  max_datetime: '2020-03-22 10:30:00',
  is_account_address: false,
  instructions: 'Special pickup instructions',
  carrier_accounts: [process.env.USPS]
});

pickup.save().then(console.log).catch(console.log);
