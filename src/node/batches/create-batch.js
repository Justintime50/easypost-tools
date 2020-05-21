const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const batch = new api.Batch({
    /* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
    shipments: ['shp_7c90096cd61d4f109258a5943ccca171', 'shp_3805857cad3a425d833b728c953a1dca', 'shp_da0f723d112a49d8b744183cbde7c2a0']
});

batch.save().then(console.log);
