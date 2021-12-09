// Trimmer: A tool to trim all whitespace from your strings - great for tracking numbers.

// eslint-disable-next-line no-unused-vars
function clearInput() {
    document.getElementById("trimmer-input").value = "";
    document.getElementById("trimmer-output").innerHTML = "";
}

// eslint-disable-next-line no-unused-vars
function processInput() {
    let k
    let i = document.getElementById("trimmer-input").value;
    let lines = i.split('\n');
    for (k = 0; k < lines.length; k++) {
        lines[k] = lines[k].replace(/\s+/g, ''); // trim all whitespace
    }
    document.getElementById("trimmer-output").innerHTML = '<pre>' + lines.join('\n') + '</pre>';
}
