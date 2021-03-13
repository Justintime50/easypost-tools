const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Convert the label of a shipment from the format returned to either [ZPL, PDF, PNG]

api.Shipment.retrieve('shp_123...').then(shipment => {
    shipment.convertLabelFormat('ZPL').then(console.log).catch(console.log);
}).catch(console.log);
