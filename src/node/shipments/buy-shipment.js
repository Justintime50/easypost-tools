const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_f31ce6b1438a44d2a40aad40b5d05f19").then(s => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_09aa3bdd3485498cb1a49cb6963160b6").then(console.log).catch(console.log);
}).catch(console.log);
