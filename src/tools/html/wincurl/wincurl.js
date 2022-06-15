// WinCurl: A tool to convert your macOS/Linux cURL requests to a Windows equivalent.
// WinCurl trims whitespace, escapes bad characters, replaces quotes, and replaces line continuation characters for Windows.

// eslint-disable-next-line no-unused-vars
function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').innerHTML = '';
}

// eslint-disable-next-line no-unused-vars
function processInput() {
  let key;
  let input = document.getElementById('input').value;
  let lines = input.split('\n');
  for (key = 0; key < lines.length; key++) {
    lines[key] = lines[key].trim(); // trim whitespace
    lines[key] = lines[key].replace('<', '&lt;'); // escape any HTML-esque stuff in the input
    lines[key] = lines[key].replace('>', '&gt;'); // escape any HTML-esque stuff in the input
    lines[key] = lines[key].replace('\\', '^'); // replace line continuation
    lines[key] = lines[key].replace(/['']/gi, '"'); // replace quotations
  }
  document.getElementById('output').innerHTML = '<pre>' + lines.join('\n') + '</pre>';
}
