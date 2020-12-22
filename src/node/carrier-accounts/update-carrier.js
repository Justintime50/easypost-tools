const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierAccount.retrieve('ca_c7d79a3739df429f95232f725d0e8197').then((ca) => {
    ca.credentials['company_name'] = ''
    ca.credentials['address_street'] = ''
    ca.credentials['address_city'] = ''
    ca.credentials['address_state'] = ''
    ca.credentials['address_zip'] = ''
    ca.credentials['phone'] = ''
    // ca.credentials['email'] = ''
    ca.save().then(console.log).catch(console.log);
}).catch(console.log);
