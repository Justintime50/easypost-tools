const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const tracker = new api.Tracker({
  tracking_code: '9400110898825022579493',
  carrier: 'USPS',
});

tracker.save().then(console.log);
