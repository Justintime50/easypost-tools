const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierAccount.retrieve('ca_a320405989b94edb99b1c24044e9c491').then(ca => ca.delete());
