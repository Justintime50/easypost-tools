const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

api.Shipment.retrieve('shp_c9a21024f3c94aba9fed11b2131ca81c').then(shipment => {
    shipment.convertLabelFormat('ZPL').then(console.log).catch(console.log);
}).catch(console.log);
