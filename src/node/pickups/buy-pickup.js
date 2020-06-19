const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY); // DO NO CREATE IN PROD!

api.Pickup.retrieve('pickup_b63d0a18c2384100871d289438698356').then(p => {
    p.buy('UPS', 'Future-day Pickup').catch(console.error);
});
