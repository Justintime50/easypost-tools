const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const address = new api.Address({
  street1: '417 MONTGOMERY ST',
  street2: 'FLOOR 5',
  city: 'SAN FRANCISCO',
  state: 'CA',
  zip: '94104',
  country: 'US',
  company: 'EasyPost',
  phone: '415-123-4567',
});

address.save().then(console.log);
