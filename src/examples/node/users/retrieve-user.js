const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// If no user id is passed in, the user of the api key being used here will return
api.User.retrieve('user_123...').then(console.log).catch(console.error);
