const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Note: A Batch is created in the background for Shipments as an intermediate process 
// to creating ScanForms. You can create a ScanForm for 1 or a group of Shipments.

const scanForm = new api.ScanForm({
    shipments: ['shp_123...']
});

scanForm.save().then(console.log).catch(console.log);
