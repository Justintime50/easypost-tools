const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: "http://oregon1.jhammond.devvm.easypo.net:5000/v2/",
}); // DO NO CREATE IN PROD!

const address = 'adr_a84d92f289e044d9abe91b5b2de42844';
const shipment = 'shp_15ffe591242b4a238f020b3263d9becf';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-11-20 10:30:00',
    max_datetime: '2020-11-21 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
    carrier_accounts: [process.env.DEVVM_DHL_EXPRESS]
});

pickup.save().then(console.log).catch(console.log);
