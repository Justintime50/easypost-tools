const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('test.csv') // CSV file to be parsed
.pipe(csv())
.on('data', (row) => {
    console.log(row)
})
