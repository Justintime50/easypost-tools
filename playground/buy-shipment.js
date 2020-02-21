const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_a9d9dd3f67b145d3bd9e54c4792babbe").then(s => {
    s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
}).catch(console.log);
