const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.Webhook.delete('hook_1a05a257fb3b4f79bddc7506c11b2039').then(console.log).catch(console.log);
