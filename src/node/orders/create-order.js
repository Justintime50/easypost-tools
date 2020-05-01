const Easypost = require('@easypost/api')
const dotenv = require('dotenv')
const dad = require('dad-tool');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

// Setup addresses from dad
const dadTo = dad.random('US_WA');
const dadFrom = dad.random('US_UT');

// Setup static variables
const name = 'Jake Peralta';
const company = 'EasyPost';
const phone = '8015551234';
const email = 'email@example.com';
const number = Number((Math.random() * (10.00 - 1.00) + 1.00).toFixed(2));

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */

const order = new api.Order({
    to_address: {
        verify: ['delivery'],
        company,
        name,
        street1: dadTo.street1,
        street2: dadTo.street2,
        city: dadTo.city,
        state: dadTo.state,
        zip: dadTo.zip,
        country: dadTo.country,
        phone,
        email
    },
    from_address: {
        company,
        name,
        street1: dadFrom.street1,
        street2: dadFrom.street2,
        city: dadFrom.city,
        state: dadFrom.state,
        zip: dadFrom.zip,
        country: dadFrom.country,
        phone,
        email
    },
    shipments: [
        new api.Shipment({
            parcel: {
                length: number,
                width: number,
                height: number,
                weight: number
            },
            reference: "order-test",
        }),
        new api.Shipment({
            parcel: {
                length: number,
                width: number,
                height: number,
                weight: number
            },
            reference: "order-test",
        })
    ],
    carrier_accounts: [{id: process.env.UPS}],
    service: "2ndDayAir",
});

order.save().then(console.log);
