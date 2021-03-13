const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.Pickup.retrieve('pickup_123...').then(pickup => {
    pickup.buy(
        'DHLExpress', // carrier
        'ExpressPickup' // service
    ).then(console.log).catch(console.error);
}).catch(console.log);
