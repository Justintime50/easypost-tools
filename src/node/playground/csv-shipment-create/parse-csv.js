const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data.csv') // CSV file to be parsed
    .pipe(csv())
    .on('data', (row) => {
        console.log(row)
    })
