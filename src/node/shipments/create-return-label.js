const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

// Setup EasyPost API key
dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const toAddress = new api.Address({ id: "adr_123..." });
const fromAddress = new api.Address({ id: "adr_123..." });
const parcel = new api.Parcel({ id: "prcl_123..." });

const shipment = new api.Shipment({
    parcel: parcel,
    to_address: toAddress,
    from_address: fromAddress,
    is_return: true,  // switches the to and from address on the label
});

shipment.save().then(console.log).catch(console.log);
