// WinCurl: A tool to convert your macOS/Linux cURL requests to a Windows equivalent.
// WinCurl trims whitespace, escapes bad characters, replaces quotes, and replaces line continuation characters for Windows.

// eslint-disable-next-line no-unused-vars
function clearInput() {
    document.getElementById("wincurl-input").value = "";
    document.getElementById("wincurl-output").innerHTML = "";
}

// eslint-disable-next-line no-unused-vars
function processInput() {
    let k
    var i = document.getElementById("wincurl-input").value;
    var lines = i.split('\n');
    for (k = 0; k < lines.length; k++) {
        lines[k] = lines[k].trim(); // trim whitespace
        lines[k] = lines[k].replace('<', '&lt;'); // escape any HTML-esque stuff in the input
        lines[k] = lines[k].replace('>', '&gt;'); // escape any HTML-esque stuff in the input
        lines[k] = lines[k].replace('\\', '^'); // replace line continuation
        lines[k] = lines[k].replace(/['']/gi, '"'); // replace quotations
    }
    document.getElementById("wincurl-output").innerHTML = '<pre>' + lines.join('\n') + '</pre>';
}
