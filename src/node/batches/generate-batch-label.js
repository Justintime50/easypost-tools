const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Create a multi-page label file containing all the labels from a batch
api.Batch.retrieve("batch_123...").then(batch => {
    batch.generateLabel('PDF').then(console.log).catch(console.log);
}).catch(console.log);
