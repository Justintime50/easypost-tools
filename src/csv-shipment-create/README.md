# CSV Shipment Create

Create shipments from a CSV file and batch them together. Output your progress to console and a CSV/text files.

This script has been tested with up to `3500 production labels`. The runtime was approximately 1.5 hours as a response a second was sent.

## Install

```bash
npm i -s csv-parser
npm i @easypost/api
```

## Usage

Edit the API key, service, carrier, and carrier account ID in the `purchase-labels.js` file before running the scripts below.

```bash
# Parse the CSV into a text file
node parse-csv.js > data.txt

# Copy the data in, then run the following. 
# This will purchase labels and batch them together, 
# outputing each shipment ID to an output.csv file 
# and the entire console-log to console-log.txt.
node purchase-labels.js 2>&1 | tee console-output.txt

# If you needed to generate a batch label afterwards and the script didn't do so for you, run the following:
node generate-batch-label.js
```

## Data Format

The data must be formatted like so:

```javascript
data = [
    {
        toAddress: 'adr_267bc8b2130645b3902aca1a9ba213b0',
        fromAddress: 'adr_18f3da2702e6442cb4782588016042d7',
        parcel: 'prcl_5f26c36628954115811613f01af5b12f'
    },
    {
        toAddress: 'adr_267bc8b2130645b3902aca1a9ba213b0',
        fromAddress: 'adr_18f3da2702e6442cb4782588016042d7',
        parcel: 'prcl_5f26c36628954115811613f01af5b12f'
    },
    {
        toAddress: 'adr_267bc8b2130645b3902aca1a9ba213b0',
        fromAddress: 'adr_18f3da2702e6442cb4782588016042d7',
        parcel: 'prcl_5f26c36628954115811613f01af5b12f'
    },
];
```
