const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

api.Pickup.retrieve('pickup_6b601d207b0f43f28aed1d7ff0426902').then(p => {
    p.buy('FedEx', 'Future-day Ground Pickup').catch(console.error);
});
