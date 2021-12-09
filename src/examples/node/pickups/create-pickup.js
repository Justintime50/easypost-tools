const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const address = 'adr_123...';
const shipment = 'shp_123...';

const pickup = new api.Pickup({
  address,
  shipment,
  reference: 'my-first-pickup',
  min_datetime: '2020-11-20 10:30:00',
  max_datetime: '2020-11-21 10:30:00',
  is_account_address: false,
  instructions: 'Special pickup instructions',
  carrier_accounts: ['ca_123...']
});

pickup.save().then(console.log).catch(console.log);
