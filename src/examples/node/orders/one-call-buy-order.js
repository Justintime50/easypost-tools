const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const to_address = {
  street1: '417 MONTGOMERY ST',
  street2: 'FLOOR 5',
  city: 'SAN FRANCISCO',
  state: 'CA',
  zip: '94104',
  country: 'US',
  company: 'EasyPost',
  phone: '415-123-4567',
}

const from_address = {
  street1: '417 MONTGOMERY ST',
  street2: 'FLOOR 5',
  city: 'SAN FRANCISCO',
  state: 'CA',
  zip: '94104',
  country: 'US',
  company: 'EasyPost',
  phone: '415-123-4567',
}

const order = new api.Order({
  from_address,
  to_address,
  shipments: [
    {
      parcel: {
        length: 8,
        width: 5,
        height: 5,
        weight: 5
      },
    },
  ],
  service: 'FEDEX_GROUND',
  carrier_accounts: [process.env.FEDEX]
});

order.save().then(console.log).catch(console.log);
