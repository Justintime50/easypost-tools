const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_59b0465b347b42bdaf8cbc9883d75cb6").then(s => {
    // s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
    s.buy("rate_4783c67420574578aa068888b402496f").then(console.log).catch(console.log);
}).catch(console.log);
