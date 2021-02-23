const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierType.all().then(response => {
    console.log(JSON.stringify(response, null, 4));
}).catch(console.log);
