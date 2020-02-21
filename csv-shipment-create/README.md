# CSV Shipment Create

Create shipments from a CSV file and batch them together. Output your progress to console and a CSV.

## Install

```bash
npm i -s csv-parser
npm i @easypost/api
```

## Usage

Edit the API key, service, carrier, and carrier account ID before running the script below.

```bash
# Parse the CSV into a text file
node parse-csv.js > data.txt

# Copy the data in, then run the following. This will repurchase labels and batch them together, outputing each shipment ID to an output.csv file.
node repurchase-labels.js

# If you needed to generate a batch label afterwards, run the following:
node generate-batch-label.js
```
