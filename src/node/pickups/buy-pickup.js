const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

api.Pickup.retrieve('pickup_f061e72b247740418f72ca1145f2344e').then(p => {
    p.buy('USPS', 'NextDay').catch(console.error);
});
