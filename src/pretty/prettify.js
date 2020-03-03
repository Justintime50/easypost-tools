data = JSON.stringify(

// INSERT UNFOMRATTED JSON BELOW
////////////////////////////////

{"shipment":{"reference":"1756884","to_address":{"street1":"1049 Thanon Witthayu ","street2":"11th floor Room 45, Khwaeng Lumphini","city":"Khet Pathum Wan","state":"BANGKOK","zip":"10330","country":"TH","name":"Aaron Gutman","phone":"14152549409"},"from_address":{"street1":"13820 NE Airport Way","city":"Portland","state":"OR","zip":"97251","country":"US","name":"Reship.com","phone":"18003457447"},"parcel":{"length":"45","width":"25","height":"20","weight":"1120"},"customs_info":{"customs_certify":"true","customs_signer":"Dillon Hutchins","contents_type":"merchandise","restriction_type":"none","eel_pfc":"NOEEI 30.37(a)","non_delivery_option":"return","customs_items":{"0":{"_validationErrors":"","description":"Work station - Ergotron desk","quantity":"1","value":"475","currency":"USD","weight":"1093","origin_country":"US","hs_tariff_number":"6109.10.0012"}}},"options":{"label_size":"4x6"}},"format":"json","controller":"shipments","action":"create"}

////////////////////////////////
// INSERT UNFORMATTED JSON ABOVE

, null, 4);

console.log(data);
