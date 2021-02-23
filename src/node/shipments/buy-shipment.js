const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

console.log("//===============================================================//");
api.Shipment.retrieve("shp_f99f06ff2ad948da8d5d2751c44eae49").then(shipment => {
    shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_ac578e05a20644a8bcaa249b46fa28c5").then(console.log).catch(console.log);
}).catch(console.log);
