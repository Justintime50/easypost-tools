const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Grab the details of a carrier account by the account name "eg: FedexAccount"
// USAGE: CARRIER_ACCOUNT_NAME=FedexAccount node carrier_account_detail_grabber.js

api.CarrierType.all().then((r) => {
    for (let i = 0; i < r.length; i++) {
        if (r[i].type == process.env.CARRIER_ACCOUNT_NAME) {
            console.log(JSON.stringify(r[i]));
        }
    }
});
