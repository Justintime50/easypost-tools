const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.Batch.retrieve("").then(b => {
    b.generateLabel('ZPL').then(console.log).catch(console.log);
}).catch(console.log);