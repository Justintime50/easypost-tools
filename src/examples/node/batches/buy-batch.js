const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// CRITERIA TO BUY A BATCH: 
// Each of the shipments must have a parcel, a from_address, a to_address, a carrier, a service, and a carrier_accounts array

const shipment = {
    to_address: {
        street1: '417 MONTGOMERY ST',
        street2: 'FLOOR 5',
        city: 'SAN FRANCISCO',
        state: 'CA',
        zip: '94104',
        country: 'US',
        company: 'EasyPost',
        phone: '415-123-4567',
    },
    from_address: {
        street1: '417 MONTGOMERY ST',
        street2: 'FLOOR 5',
        city: 'SAN FRANCISCO',
        state: 'CA',
        zip: '94104',
        country: 'US',
        company: 'EasyPost',
        phone: '415-123-4567',
    },
    parcel: {
        length: 25,
        width: 9,
        height: 1,
        weight: 27
    },
    service: "Xpresspost",
    carrier: "CanadaPost",
    carrier_accounts: ["ca_123..."],
}

const batch = new api.Batch({
    shipments: [shipment]
});

batch.save().then(batch => {
    batch.buy().then(console.log).catch(console.log);
}).catch(console.log);
