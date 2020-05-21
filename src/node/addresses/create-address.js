const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const address = new api.Address({
  verify: ['delivery'],
  street1: 'PRG 6-1 BAF',
  // street2: 'FLOOR 5',
  city: 'APO',
  state: 'AE',
  zip: '09354',
  country: 'US',
  // company: 'EasyPost',
  // phone: '415-123-4567',
  // name: 'Test'
});

address.save().then(console.log).catch(console.log);
