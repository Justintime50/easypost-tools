const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Grab all trackers in date range
trackers = api.Tracker.all({
    page_size: 100,
    start_datetime: "2020-03-01T08:50:00Z",
    end_datetime: "2020-03-27T08:50:00Z"
}).then(console.log);
