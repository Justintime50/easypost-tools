const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const dad = require('dad-tool');

// Setup EasyPost API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

// Setup addresses from dad
const dadTo = dad.random('US_UT');
const dadFrom = dad.random('US_UT');

// Setup static variables
const name = 'Jake Peralta';
const company = 'EasyPost';
const phone = '8015551234';
const email = 'email@example.com';
const number = Number((Math.random() * (10.00 - 1.00) + 1.00).toFixed(2));

// Create and Buy Shipment
async function createAndBuy() {
    const shipment = new api.Shipment({
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
        parcel: {
            length: number,
            width: number,
            height: number,
            weight: 1,
            // predefined_package: "Letter"
        },
        carrier_accounts: [process.env.USPS], // If CANADA_POST, use TEST!
        options: {
            //     // delivery_confirmation: "NO_SIGNATURE",
            //     // label_date: "2020-04-03",
            //     label_size: "7x3",
            invoice_number: "123",
        }
    });

    await shipment.save().catch(console.log)

    api.Shipment.retrieve(shipment.id).then(shipment => {
        shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log);
    }).catch(console.log);
}

createAndBuy()
