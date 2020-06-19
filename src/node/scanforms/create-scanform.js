const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const scanForm = new api.ScanForm({
    shipments: ['shp_057a45bbc9724fcbb23a513bf2f78386']
});

scanForm.save().then(console.log).catch(console.log);
