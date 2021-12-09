const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Add a single shipment to a batch
api.Batch.retrieve('batch_123...').then(batch => {
    batch.addShipment("shp_123...").then(console.log).catch(console.log);
}).catch(console.log);
