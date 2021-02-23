const data = JSON.stringify(

    // INSERT UNFOMRATTED JSON BELOW
    ////////////////////////////////

    { "batch": { "shipment": { "0": { "to_address": { "country": "US", "city": "Springfield", "street2": "", "street1": "742 Evergreen Terrace", "name": "Maggie Simpson", "state": "KY", "zip": "40069" }, "from_address": { "state": "CA", "name": "Simpler Postage Inc", "city": "San Francisco", "phone": "415-456-7890", "street2": "Apt 20", "street1": "388 Townsend St", "zip": "94107" }, "carrier": "FedEx", "parcel": { "width": "8", "weight": "22.9", "height": "12.1", "length": "19.8" }, "service": "FEDEX_GROUND", "carrier_accounts": { "id": "ca_3bd616120603457fbed9deb1e425bbdc" } } } }, "format": "json", "controller": "batches", "action": "create" }

    ////////////////////////////////
    // INSERT UNFORMATTED JSON ABOVE

    , null, 4);

console.log(data);
