const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const scanForm = new api.ScanForm({
    shipments: ['']
});
  
scanForm.save().then(console.log).catch(console.log);
