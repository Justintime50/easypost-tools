// Trimmer: A tool to trim all whitespace from your strings - great for tracking numbers.

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
    lines[key] = lines[key].replace(/\s+/g, ''); // trim all whitespace
  }
  document.getElementById('output').innerHTML = '<pre>' + lines.join('\n') + '</pre>';
}
