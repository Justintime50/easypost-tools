const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const shipment = new api.Shipment({
  to_address: {
    verify: ['delivery'], // optionally verify the address
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
    length: 8,
    width: 5,
    height: 5,
    weight: 5,
  },
  // if your shipment is international, it will require customs_info
  customs_info: {
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    declaration: 'Here is a bunch of information...',

    /* customs_items can be passed in as instances or ids.
     *  if the item does not have an id, it will be created. */
    customs_items: [
      new api.CustomsItem({
        description: 'Sweet shirts 1',
        quantity: 2,
        weight: 11,
        value: 23,
        hs_tariff_number: '654321',
        origin_country: 'US',
        code: '123',
      }),
    ],
  },
  options: {
    label_format: 'PNG', // optionally request a specific label format
    label_size: '4x6', // optionally pass the label_size
  },
  carrier_accounts: ['ca_123...'],
});

shipment.save().then(console.log).catch(console.log);
