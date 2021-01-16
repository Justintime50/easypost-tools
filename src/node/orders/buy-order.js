const Easypost = require('@easypost/api')
const dotenv = require('dotenv')

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const prod = 'https://api.easypost.com/v2/'
const devvm = 'http://oregon1.jhammond.devvm.easypo.net:5000/v2/'
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: devvm,
});

api.Order.retrieve('order_809eef25f68c4287a3d65df5746f8de9').then(order => {
    order.buy('AustraliaPost', 'ExpressPostSignature').then(console.log).catch(console.error)
}).catch(console.log);
