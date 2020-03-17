data = JSON.stringify(

// INSERT UNFOMRATTED JSON BELOW
////////////////////////////////

{"shipment":{"return_address":{"state":"CA","country":"US","street2":"Suite 100","phone":"7072650100","zip":"94503","street1":"5555 Broadway St","city":"American Canyon","company":"Copper Peak Logistics"},"options":{"alcohol":"1","print_custom_2_code":"PO","label_format":"PNG","receiver_liquor_license":"false","delivery_confirmation":"ADULT_SIGNATURE","print_custom_1":"8233 2455610.000","print_custom_3_code":"DP"},"to_address":{"country":"US","zip":"02110","name":"DUFF & PHELPS","street1":"225 FRANKLIN ST","city":"BOSTON","company":"CARL JENKINS","phone":"(617) 378-9484","state":"MA","street2":"FL 21"},"from_address":{"state":"CA","phone":"7072650100","name":"% Copper Peak Logistics","street1":"5555 Broadway St","city":"American Canyon","zip":"94503","company":"Littorai","country":"US","street2":"Suite 100"},"parcel":{"length":"1.0","height":"1.0","width":"1.0","weight":"64.0"},"reference":"2455610.000-1/1","carrier_accounts":{"0":{"id":"ca_7cdde286ff8d46c79af4949976b81fa4"}}},"format":"json","controller":"shipments","action":"create"}

////////////////////////////////
// INSERT UNFORMATTED JSON ABOVE

, null, 4);

console.log(data);
