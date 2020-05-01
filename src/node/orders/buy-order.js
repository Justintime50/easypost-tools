const Easypost = require('@easypost/api')
const dotenv = require('dotenv')
const dad = require('dad-tool');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' })
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY)

api.Order.retrieve('order_2dc7b8d6836d4a31bd85bf6f39864ec3').then(order => {
    order.buy('UPSMailInnovations', 'Priority').then(console.log).catch(console.error)
}).catch(console.log);
