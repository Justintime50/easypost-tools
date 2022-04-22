const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-dev/.env' });
const api = new Easypost(process.env.DEVVM_TEST_API_KEY);

// Assign JSON data from file to variable
const data = JSON.parse(fs.readFileSync('/Users/jhammond/git/easypost/easypost-dev/src/devvm/node/shipment.json'));

// Get rid of all the things
delete data.to_address.id;
delete data.to_address.mode;
delete data.to_address.updated_at;
delete data.to_address.created_at;
delete data.to_address.carrier_facility;
delete data.from_address.id;
delete data.from_address.created_at;
delete data.from_address.mode;
delete data.from_address.updated_at;
delete data.parcel.id;
delete data.parcel.created_at;
delete data.parcel.mode;
delete data.parcel.updated_at;
if (data.parcel.predefined_package === null) {
  delete data.parcel.predefined_package;
}
if (data.customs_info) {
  delete data.customs_info.id;
  delete data.customs_info.created_at;
  delete data.customs_info.mode;
  delete data.customs_info.updated_at;
  for (let i = 0; i < data.customs_info.customs_items.length; i++) {
    delete data.customs_info.customs_items[i].id;
    delete data.customs_info.customs_items[i].created_at;
    delete data.customs_info.customs_items[i].mode;
    delete data.customs_info.customs_items[i].updated_at;
    if (data.customs_info.customs_items[i].currency === null) {
      delete data.customs_info.customs_items[i].currency;
    }
  }
}
delete data.batch_id;
delete data.batch_message;
delete data.batch_status;

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  from_address: data.from_address,
  parcel: data.parcel,
  options: data.options,
  customs_info: data.customs_info,
  carrier_accounts: [process.env.CANPAR],
});

shipment.save().then(console.log).catch(console.log);
