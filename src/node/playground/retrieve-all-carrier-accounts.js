const Easypost = require('@easypost/api')
const dotenv = require('dotenv')
// const fs = require('fs')

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY, {
    baseUrl: prod,
})

// A perfect use case for this script would be rebuilding an env file with all your carrier account IDs

// Retrieve all configured carrier accounts and print to console and save their name & ID to a text file
async function retrieveCarriers() {
    const carrier = await api.CarrierAccount.all().catch(console.log)
    for (let i = 0; i < carrier.length; i++) {
        let carrierName = carrier[i].readable.toUpperCase()
        let noSpaceCarrierName = carrierName.replace(/ /g, "_")
        let envCarrierName = noSpaceCarrierName + "=" + carrier[i].id
        console.log(envCarrierName)
        // fs.appendFileSync(envCarrierName + "\n")
        // TODO: Add to a list, ascending order, return the list, save to file in another function
    }
}
retrieveCarriers()
