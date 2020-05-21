const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_1f464b49529c423c9f3a9f1a7ac2f29a").then(s => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_7cf97bc2fb7d45c88b78e32ef510c353").then(console.log).catch(console.log);
}).catch(console.log);
