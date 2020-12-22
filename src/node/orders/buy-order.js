const Easypost = require('@easypost/api')
const dotenv = require('dotenv')

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.DEVVM_TEST_API_KEY, {
    baseUrl: "http://oregon1.jhammond.devvm.easypo.net:5000/v2/",
});

api.Order.retrieve('order_bc8a8917e8e4424a8ea21673e1748ad5').then(order => {
    order.buy('DHLExpress', 'Express1200NonDoc').then(console.log).catch(console.error)
}).catch(console.log);
