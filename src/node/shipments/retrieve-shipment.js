const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const shipment = api.Shipment.retrieve("shp_eb6565163875447ca582d7df9f9d2abf");
console.log(shipment)
