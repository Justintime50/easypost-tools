const Easypost = require('@easypost/api');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// A perfect use case for this script would be rebuilding an env file with all your carrier account IDs

// Retrieve all configured carrier accounts and print to console and save their name & ID to a text file
async function retrieveCarriers() {
    const carrier = await api.CarrierAccount.all()
    for (i = 0; i < carrier.length; i++) {
        let carrierName = carrier[i].readable.toUpperCase();
        carrierName = carrierName.replace(/ /g,"_");
        console.log(carrierName+"="+carrier[i].id);
        fs.appendFileSync("carriers_accounts.txt", carrier[i].readable+"="+carrier[i].id+"\n");
    }
}
retrieveCarriers();
