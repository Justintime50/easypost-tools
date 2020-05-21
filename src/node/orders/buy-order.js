const Easypost = require('@easypost/api')
const dotenv = require('dotenv')

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

api.Order.retrieve('order_231b996f97c14f3eaf0047bbe0a39792').then(order => {
    order.buy('FEDEX', 'INTERNATIONAL_FIRST').then(console.log).catch(console.error)
}).catch(console.log);
