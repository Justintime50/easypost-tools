const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.Batch.retrieve('batch_259b89f90cab45858a36e3ac50a3066f').then(response => response.addShipment("shp_2ce5d9012ad04bcd8017a57ef3cbf4f8").then(console.log("Shipment batched")).catch(console.log));
