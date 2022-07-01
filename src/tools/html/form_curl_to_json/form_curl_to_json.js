// FormCurlToJson: A tool to convert form-encoded cURL requests to JSON.

// eslint-disable-next-line no-unused-vars
function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').innerHTML = '';
}

// eslint-disable-next-line no-unused-vars
function processInput() {
  let key;
  const rootKey = document.getElementById('rootKey').value;
  let jsonObject = { [rootKey]: {} };
  let input = document.getElementById('input').value;
  let lines = input.split('\n');
  for (key = 0; key < lines.length; key++) {
    lines[key] = lines[key].trim(); // trim whitespace
    lines[key] = lines[key].replace('-d ', ''); // Remove the -d flag
    lines[key] = lines[key].replace('\\', ''); // remove line continuation
    lines[key] = lines[key].replace(/"/g, ''); // remove quotations
    lines[key] = lines[key].replace(/'/g, ''); // remove quotations
    lines[key] = lines[key].replace(/]/g, ''); // remove ending brackets
    lines[key] = lines[key].trim(); // trim whitespace again

    const lineEntries = lines[key].split('=');
    const [topLevelKey, nestedKey] = lineEntries[0].split('[');
    jsonObject[topLevelKey][nestedKey] = lineEntries[1];
  }
  document.getElementById('output').innerHTML = JSON.stringify(jsonObject, null, 2);
}

// eslint-disable-next-line no-unused-vars
function copyToClipboard() {
  let textField = document.getElementById('output').innerHTML;
  navigator.clipboard.writeText(textField);
}
