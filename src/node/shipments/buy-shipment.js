const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

console.log("//===============================================================//");
api.Shipment.retrieve("shp_355e9bc017534508bf2e349925c7160b").then(s => {
    // s.buy(s.lowestRate()).then(console.log).catch(console.log);
    s.buy("rate_ac578e05a20644a8bcaa249b46fa28c5").then(console.log).catch(console.log);
}).catch(console.log);
