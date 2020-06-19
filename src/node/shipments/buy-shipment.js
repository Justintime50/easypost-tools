const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

console.log("//===============================================================//");
api.Shipment.retrieve("shp_e286491f93a348228a3cf8cf27591caf").then(s => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
    // s.buy("rate_5e01da2a8f4340869d886009e5c67373").then(console.log).catch(console.log);
}).catch(console.log);
