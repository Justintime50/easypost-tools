const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_efd91ab68c8044f1932bacc6cdb2405f").then(s => {
    // s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
    s.buy("rate_ede5a791cb954f0987f2f7aebc14154d").then(console.log).catch(console.log);
}).catch(console.log);
