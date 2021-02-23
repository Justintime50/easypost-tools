const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// If no user id is passed in, the user returned is the owner of the api key.
api.User.retrieve().then(user => {
    user.name = 'Justin Hammond';
    user.save().then(console.log).catch(console.error);
}).catch(console.log);
