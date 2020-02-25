// Purchase labels from a CSV
const Easypost = require('@easypost/api');
const fs = require('fs');

// EasyPost API Key
const api = new Easypost("");

// Dump data from the output of `parse-csv.js` here
let data = [ 
    // Place data here
];

// Init iterator
let row = 0;

// Setup Batch object
const batch = new api.Batch();
batch.save().then(function (response) {
    console.log(response.id);
    console.log("//===============================================================//");
})

// Import and parse CSV
function asyncShipmentCalls() {

    // When we run out of data, stop the script
    if (!data[row]) {
        api.Batch.retrieve(batch.id).then(b => {
            b.generateLabel('ZPL').then(console.log).catch(console.log);
        }).catch(console.log);
        console.log("//===============================================================//");
        console.log("Script complete!");
        return
    }

    // Iterate each row here grabbing ID's
    console.log("//===============================================================//");
    const toAddress = data[row].toAddress;
    const fromAddress = data[row].fromAddress;
    const parcel = data[row].parcel;
    // const customsInfo = data[row].customsInfo;

    // Build a shipment for each row
    const shipment = new api.Shipment({
        to_address: toAddress,
        from_address: fromAddress,
        parcel: parcel,
        options: {
            label_date: "2020-02-21",
            label_format: "ZPL"
        },
        service: "FEDEX_2_DAY",
        carrier: "FedEx",
        carrier_accounts: [""],
    });

    // Save the shipment
    shipment.save().then(function (response) {
        row++;
        console.log("Shipment #" + row);
        console.log(response.id + "\n", response.postage_label.label_url);
        batch.addShipment(response.id).then(console.log("Shipment batched")).catch(console.log); // Add shipment to batch

        // Output new shipment ID's to a CSV
        fs.appendFileSync("output.csv", response.id + ",\n");

        // Start the loop again
        asyncShipmentCalls();
    }).catch(function (response) {
        row++;
        console.log(response);
        asyncShipmentCalls();
     })
}

// Initial call of funtion
asyncShipmentCalls();
