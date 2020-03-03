const Easypost = require('@easypost/api');
const dotenv = require('dotenv');

dotenv.config({ path: '/Users/jhammond/git/easypost/easypost-tools/.env' });
const api = new Easypost(process.env.EASYPOST_PROD_API_KEY);

// Setup timeframe for each report (Must be less than 31 days between start/end)
startDate = "2020-02-01";
endDate = "2020-02-31";

// Create Payment Log Report
const paymentLogReport = new api.Report({
    type: 'payment_log',
    start_date: startDate,
    end_date: endDate
});
paymentLogReport.save().then(console.log);

// Create Refund Report
const refundReport = new api.Report({
    type: 'refund',
    start_date: startDate,
    end_date: endDate
});
refundReport.save().then(console.log);

// Create Shipment Report
const shipmentReport = new api.Report({
    type: 'shipment',
    start_date: startDate,
    end_date: endDate
});
shipmentReport.save().then(console.log);

// Create Tracker Report
const trackerReport = new api.Report({
    type: 'tracker',
    start_date: startDate,
    end_date: endDate
});
trackerReport.save().then(console.log);
