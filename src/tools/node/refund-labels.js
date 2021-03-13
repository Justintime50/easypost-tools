require("dotenv").config();
require("babel-polyfill");

const Easypost = require("@easypost/api");
const api = new Easypost(process.env.prodkey);

// Attribution: [Logan Simonsen](https://github.com/LoganSimonsen)

// WARNING: this will refund/void all production labels in "pre_transit" or "unknown" status after the start date
// uses this endpoint https://www.easypost.com/docs/api#retrieve-a-list-of-shipments

api.Shipment.all({
    page_size: 100,
    start_datetime: "2019-11-13" // should be less than 30 days.
}).then(shipments => {
    // if we don't find any shipments to refund then this variable will remain false
    let found = false;
    // iterate through shipments and find shipments in a state eligible for refund (pre_transit or unknown, also not already refunded)
    for (let i = 0; i < shipments.length; i++) {
        if (
            (shipments[i].status === "unknown" && shipments[i].refund_status !== "refunded") ||
            (shipments[i].status === "pre_transit" && shipments[i].refund_status !== "refunded")
        ) {
            found = true;
            api.Shipment.retrieve(shipments[i].id)
                .then(shipment => {
                    shipment.refund().then(() =>
                        console.log(
                            "shipment: " + shipment.id,
                            " | action: refunding...",
                            " | status: " + shipment.refund_status
                        )
                    );
                })
                .catch(console.log);
        }
    }
    // tell us if there was nothing found to refund
    if (!found) {
        console.log("No shipments to refund");
    }
});
