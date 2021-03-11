const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierAccount.retrieve('ca_123...').then(carrier_account => {
    carrier_account.credentials['company_name'] = ''
    carrier_account.credentials['address_street'] = ''
    carrier_account.credentials['address_city'] = ''
    carrier_account.credentials['address_state'] = ''
    carrier_account.credentials['address_zip'] = ''
    carrier_account.credentials['phone'] = ''
    carrier_account.save().then(console.log).catch(console.log);
}).catch(console.log);
