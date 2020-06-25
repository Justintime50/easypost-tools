const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const address = api.Address.retrieve('adr_69d0618b9c7f4393b3396db34301cb8e').catch(console.log);
console.log(address.id)
