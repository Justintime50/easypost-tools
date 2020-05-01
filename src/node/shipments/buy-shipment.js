const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_f46dc051087d458ea1b32fc1aa4b1ccf").then(s => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_7cf97bc2fb7d45c88b78e32ef510c353").then(console.log).catch(console.log);
}).catch(console.log);
