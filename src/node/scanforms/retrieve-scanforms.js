const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

api.ScanForm.all({
    page_size: 2,
    start_datetime: '2020-03-01T08:50:00Z',
}).then(console.log).catch(console.log);
