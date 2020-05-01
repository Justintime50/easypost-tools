# EasyPost API Tools

My personal EasyPost API tools.

All tools are intended to be used with `.env` file where possible.

## Install

Install EasyPost Tools, client libraries, and any missing code languages:

```bash
./install.sh
```

Setup environment file with API keys and carrier accounts:

```bash
cp .env.example .env
```

## Tools

### Addresses

Interact with the `Addresses` endpoint. View [README](/src/addresses/README.md).

### Batches

Interact with the `Batches` endpoint.

### CSV Shipment Create

Create up to thousands of shipments and buy their labels from a CSV file. View [README](/src/csv-shipment-create/README.md).

### Get Libraries

Easily clone or pull all the officially supported EasyPost API libraries. View [README](/src/get-libraries/README.md).

### Parcels

Interact with the `Parcels` endpoint. View [README](/src/parcels/README.md).

### PHP

PHP specific scripts.

### Playground

Mess with experimental scripts. View [README](/src/playground/README.md).

### Pretty

Take unformatted JSON and prettify it. Enter your JSON and run the following:

```bash
node prettify.js
```

### Rate Tables

Scripts that are helpful with Rate Tables.

### Recreate

Recreate API calls as if you were a customer. View [README](/src/recreate/README.md).

### Scripts

A collection of shell scripts helpful for EasyPost API troubleshooting. View [README](/src/addresses/README.md).

### Shipments

Easily create shipments with all our supported client libraries and languages. View [README](/src/shipments/README.md).

### Webhooks

Interact with the `Webhook` endpoint.

## Other Tools

### Dummy Address Data

There is a library which has thousands of dummy verified addresses. View the project [here](https://github.com/EthanRBrown/rrad).

### Labelary

Create PDF's or PNG's from ZPL labels via the Labelary API. View the project [here](https://github.com/Justintime50/labelary).

### EasyPost CLI

Easily interact with the EasyPost API via the CLI. View the project [here](https://github.com/Justintime50/easypost-cli).

### EasyPost UI

Easily interact with the EasyPost API to order one-off packages and labels via a simple UI. View the project [here](https://github.com/Justintime50/easypost-ui).

## Print USPS stamps:

label_size = "7x3" (available when predefined_package = "Letter" and when the "First" rate is purchased, otherwise default "4x6" sized label will be returned. See Predefined Packages.)
