const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Buy a shipment with the lowest rate or pass a specific rate_id to it

api.Shipment.retrieve('shp_123...')
  .then((shipment) => {
    shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log);
    // shipment.buy("rate_123...").then(console.log).catch(console.log);
  })
  .catch(console.log);
