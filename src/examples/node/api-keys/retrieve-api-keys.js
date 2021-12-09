const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Retrieve all user and child user API keys in prod and test
api.ApiKey.all().then(console.log).catch(console.log)
