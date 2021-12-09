const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

api.Webhook.retrieve('hook_123...').then(webhook => {
  webhook.save().then(console.log).catch(console.log);
}).catch(console.log);
