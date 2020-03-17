const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const EasyApi = new Easypost(process.env.EASYPOST_PROD_API_KEY);

async function test() {
    const shipmentObj = new EasyApi.Shipment({

        to_address: "adr_60e32e28cc3642aeb03c876773f03c11",
        from_address: "adr_60e32e28cc3642aeb03c876773f03c11",
        parcel: "prcl_cb2955bf703c43369e140f148f7b8c8a",
        carrier_accounts: [process.env.FEDEX] // ca_4ac8565fecbc4f3f9277d03a2898d74e

    });

    const shipment = await shipmentObj.save();

    console.log(`Shipment Id : ${shipment.id}`);

    const shipmentBuyObj = await EasyApi.Shipment.retrieve(shipment.id);

    const lowerRate = shipmentBuyObj.lowestRate();

    console.log(`Rate Id : ${lowerRate.id}`);

    const buyShip = await shipmentBuyObj.buy(lowerRate.id);
}

test().catch(console.log);
