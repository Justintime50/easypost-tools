const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)
//     , {
//     baseUrl: "http://oregon1.jhammond.devvm.easypo.net:5000/v2/",
// });

console.log("//===============================================================//");
api.Shipment.retrieve("shp_af0cabe9aeff43aab3c39108277db0c1").then(s => {
    // s.buy(s.lowestRate()).then(console.log).catch(console.log);
    s.buy("rate_5534f3ad0a024c9c810d4557a94331cf").then(console.log).catch(console.log);
}).catch(console.log);
