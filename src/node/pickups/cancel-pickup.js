const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: "http://oregon1.jhammond.devvm.easypo.net:5000/v2/",
}); // DO NO CREATE IN PROD!

api.Pickup.retrieve('pickup_9df26487273b448d885e0e3d1e286cf6').then(pickup => {
    pickup.cancel().then(console.log).catch(console.error);
});
