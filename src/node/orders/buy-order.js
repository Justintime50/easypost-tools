const Easypost = require('@easypost/api')
const dotenv = require('dotenv')

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

api.Order.retrieve('order_09aa8d29c95a41bb920dea86773cf73c').then(order => {
    order.buy('FEDEX', 'INTERNATIONAL_FIRST').then(console.log).catch(console.error)
}).catch(console.log);
