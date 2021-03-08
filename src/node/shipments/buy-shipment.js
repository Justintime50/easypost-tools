const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY, {
    baseUrl: prod,
});

console.log("//===============================================================//");
api.Shipment.retrieve("shp_1bd9f44936c64ecea61aef782d84ae8a").then(shipment => {
    shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log);
    // shipment.buy("rate_ce57c5bef32343f4b25013d25a1b7d9f").then(console.log).catch(console.log);
}).catch(console.log);
