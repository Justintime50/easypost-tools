const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: "http://oregon1.jhammond.devvm.easypo.net:5000/v2/",
}); // DO NO CREATE IN PROD!

api.Pickup.retrieve('pickup_af6c3b315611453d83ed41fddefdf072').then(pickup => {
    pickup.buy('DHLExpress', 'ExpressPickup').then(console.log).catch(console.error);
}).catch(console.log);
