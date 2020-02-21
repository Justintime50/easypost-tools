// Purchase labels from a CSV
const Easypost = require('@easypost/api');
const fs = require('fs');

// EasyPost API Key
const api = new Easypost("");

// Pull data from file
parsedData = fs.readFileSync('test.txt', (err, data) => {
    if (err) {
      console.error(err);
      return
    }
})

// Init iterator
let row = 0;

// Setup Batch object
batch = new api.Batch();
batch.save().then(function (response) {
    console.log(response.id);
    console.log("//===============================================================//");
})

// Import and parse CSV
function asyncShipmentCalls() {

    // When we run out of data, stop the script
    if (!parsedData[row]) {
        api.Batch.retrieve(batch.id).then(b => {
            b.generateLabel('ZPL').then(console.log).catch(console.log);
          }).catch(console.log);
          // TODO: Add a webhook to notify when the batch label is complete
        console.log("Script complete!");
        return
    }

    // Iterate each row here grabbing ID's
    console.log("//===============================================================//");
    const toAddress = parsedData[row].toAddress;
    const fromAddress = parsedData[row].fromAddress;
    const parcel = parsedData[row].parcel;
    // const customsInfo = parsedData[row].customsInfo;

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
        console.log("Shipment #" + row)
        console.log(response.id + "\n", response.postage_label.label_url);
        row++
        batch.addShipment(response.id).then(console.log("Shipment batched")).catch(console.log); // Add shipment to batch

        // Output new shipment ID's to a CSV
        fs.appendFileSync("output.csv", response.id + ",\n");

        asyncShipmentCalls(); // call the function again
    }).catch(console.log);

}

// Initial call of funtion
asyncShipmentCalls();
