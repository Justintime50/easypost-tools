const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierAccount.retrieve('ca_123...').then(carrier_account => {
    carrier_account.delete()
}).catch(console.log);
