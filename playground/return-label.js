const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY);

const toAddress = new api.Address({id: "adr_20bc42b7210c4c86a23ca2f15d3b6e73"}); // Dr Steve Brule
const fromAddress = new api.Address({id: "adr_b68549e2324d4f0ca6c8e94ca851f24f"}); // EasyPost
const parcel = new api.Parcel({id: "prcl_cbf270019d054fa1b98952afa40ad18b"});

const shipment = new api.Shipment({
    parcel: parcel,
    to_address: toAddress,
    from_address: fromAddress,
    is_return: true,
});

// To Address should be EasyPost when switched
// From Address should be Dr Steve Brule when switched
  
shipment.save().then(console.log);
console.log("//===============================================================//");
