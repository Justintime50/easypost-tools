const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.CarrierType.all().then((r) => {
    for (i = 0; i < r.length; i++) {
        if (r[i].type == "FedexAccount") {
            console.log(JSON.stringify(r[i]));
        }
    }
});
