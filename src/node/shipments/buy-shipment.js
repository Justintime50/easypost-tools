const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_3d029040805b43098030efc129fdbc7d").then(s => {
    s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
    // s.buy("rate_ca0e8e33904e4ae48848dc1dc82eadb2").then(console.log).catch(console.log);
}).catch(console.log);
