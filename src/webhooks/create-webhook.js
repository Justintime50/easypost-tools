const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

const webhook = new api.Webhook({ url: 'https://webhook.site/a179dd75-0475-4e23-ae96-695eadd8fa41`' });

webhook.save().then(console.log);
