const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierType.all().then(r => {
    console.log(JSON.stringify(r, null, 4));
}).catch(console.log);
