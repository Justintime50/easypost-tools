const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const toAddress = 'adr_...';
const fromAddress = 'adr_...';

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. 
 * 
 * The order object should simply carry to and from addresses
 * along with a shipments array. The rest of the data such as
 * options, customs_info, etc will reside on each of the
 * individual shipments in the array. */

const order = new api.Order({
  to_address: toAddress,
  from_address: fromAddress,
  shipments: [
    new api.Shipment({
      parcel: {
        predefined_package: 'FedExBox',
        weight: 10.2
      }
    }),
    new api.Shipment({
      parcel: {
        predefined_package: 'FedExBox',
        weight: 17.5
      }
    })
  ]
});

order.save().then(console.log).catch(console.log);
