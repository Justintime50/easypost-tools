const Easypost = require('@easypost/api');
const api = new Easypost("");

api.Batch.retrieve("").then(batch => {
    batch.generateLabel('ZPL').then(console.log).catch(console.log);
}).catch(console.log);
