const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

var hrstart = process.hrtime(); // TODO: Fix benchmark timing

/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */

/*
const toAddress = new api.Address({ ... });
const fromAddress = new api.Address({ ... });
const parcel = new api.Parcel({ ... });
const customsInfo = new api.CustomsInfo({ ... });
*/

const shipment = new api.Shipment({
  to_address: {
    verify: ['delivery'],
    name: 'Dr. Steve Brule',
    street1: '179 N Harbor Dr',
    city: 'Redondo Beach',
    state: 'CA',
    zip: '90277',
    country: 'US',
    phone: '3331114444',
    email: 'dr_steve_brule@gmail.com',
  },
  from_address: {
    verify: ['delivery'],
    name: 'EasyPost',
    street1: '417 Montgomery Street',
    street2: '5th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    country: 'US',
    phone: '3331114444',
    email: 'support@easypost.com',
  },
  parcel: {
    length: 20.2,
    width: 10.9,
    height: 5,
    weight: 65.9
  },
  options: {
    //address_validation_level: 1,
    //alcohol: true,
    //label_format: "PNG",
    //print_custom_1: "Here is a custom string on a label!",
    //hazmat: "LITHIUM",
    /*payment: {
      type: "THIRD_PARTY",
      account: "ca_3bd616120603457fbed9deb1e425bbdc",
      country: "US",
      postal_code: "84057"
    }*/
  }
});


shipment.save().then(console.log);
var hrend = process.hrtime(hrstart); // TODO: Fix benchmark timing
console.log("Execution time (hr): ", hrend[0], hrend[1]/1000000); // TODO: Fix benchmark timing
