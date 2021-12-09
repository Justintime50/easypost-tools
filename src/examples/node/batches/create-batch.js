const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const batch = new api.Batch({
  /* Shipments and other batch child objects can either be
   * an array instances or an array of ids. */
  shipments: ['shp_123...']
});

batch.save().then(console.log).catch(console.log);
