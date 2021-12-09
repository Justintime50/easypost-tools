const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const address = new api.Address({
  verify_strict: ['delivery'],  // Optionally verify an address
  street1: '417 Montgomery St',
  street2: 'FLOOR 5',
  city: 'SAN FRANCISCO',
  state: 'CA',
  zip: '94104',
  country: 'US',
  company: 'EasyPost',
  phone: '415-123-4567',
  name: 'Jack Sparrow'
});

address.save().then(console.log).catch(console.log);
