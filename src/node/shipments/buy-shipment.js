const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

console.log("//===============================================================//");
api.Shipment.retrieve("shp_a6af1483752a4ef6a59874f787bbb313").then(shipment => {
    shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log);
    // shipment.buy("rate_ce57c5bef32343f4b25013d25a1b7d9f").then(console.log).catch(console.log);
}).catch(console.log);
