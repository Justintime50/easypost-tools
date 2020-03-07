const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_22ad123f9dfe479bb3cee76a14716357").then(s => {
    // s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
    s.buy("rate_33ebb6d3940c4a2199a75c3e794cf6fa").then(console.log).catch(console.log);
}).catch(console.log);
