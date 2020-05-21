const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// each of the shipments to have a parcel, a from_address, a to_address, a carrier, a service, and a carrier_accounts array

const batch = api.Batch.retrieve('batch_2e5711cfa6874eb09720d07f4dd9a69e').then(b => {
    b.generateLabel('pdf').then(console.log).catch(console.log);
});
