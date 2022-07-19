// FormCurlToJson: A tool to convert form-encoded cURL requests to JSON.

// eslint-disable-next-line no-unused-vars
function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').innerHTML = '';
}

// eslint-disable-next-line no-unused-vars
function processInput() {
  let input = JSON.parse(document.getElementById('input').value);

  let smartrates = input.smartrates;
  let outputString = '';

  for (let index = 0; index < smartrates.length; index++) {
    let carrier = smartrates[index].carrier;
    let service = smartrates[index].service;
    let percentile_95 = smartrates[index].time_in_transit.percentile_95;

    outputString += `SmartRate ${index}<br />`;
    outputString += `Carrier: ${carrier}<br />`;
    outputString += `Service: ${service}<br />`;
    outputString += `Delivery Days 95% Guarantee: ${percentile_95}<br /><br />`;
  }

  document.getElementById('output').innerHTML = outputString;
}

// eslint-disable-next-line no-unused-vars
function copyToClipboard() {
  let textField = document.getElementById('output').innerHTML;
  navigator.clipboard.writeText(textField);
}
