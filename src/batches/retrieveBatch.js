const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const batch = api.Batch.retrieve('batch_259b89f90cab45858a36e3ac50a3066f').then(console.log).catch(console.log);
