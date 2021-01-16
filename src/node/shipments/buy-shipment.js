const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY, {
    baseUrl: prod,
});

console.log("//===============================================================//");
api.Shipment.retrieve("shp_85537845b7d14784b11b90614e09304d").then(s => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_8903e522778f498b8d0340d2cc0979a3").then(console.log).catch(console.log);
}).catch(console.log);
