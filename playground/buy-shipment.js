const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_c9b76c20c1a64eb4a088bc1b7edd7606").then(s => {
    s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
}).catch(console.log);
