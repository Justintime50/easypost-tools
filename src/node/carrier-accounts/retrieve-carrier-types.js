const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Retrieve all available carrier types
api.CarrierType.all().then(carrier_types => {
    console.log(JSON.stringify(carrier_types, null, 4));
}).catch(console.log);
