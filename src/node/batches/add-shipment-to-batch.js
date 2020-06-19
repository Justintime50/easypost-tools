const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

api.Batch.retrieve('batch_ed16c875302044a8a42774babf1de883').then(response => response.addShipment("shp_9daf2b2bf68c4d30b31a95e9f9845fac").then(console.log("Shipment batched").catch(console.log)).catch(console.log));
