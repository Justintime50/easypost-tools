// Make emoticons from your letters for Slack

let words = "Alright fine, I did the needful and joined you.";
words = words.replace(/[.,/#!$%^&*;:{}=\-_`'~()]/g, "")

function emotify() {
  let w = words.split("");
  for (let i = 0; i < w.length; i++) {
    if (w[i] !== " ") {
      w[i] = ":cs-" + w[i] + ":"
    } else {
      w[i] = ":cs-s-sp:"
    }
  }
  console.log(w.join(""));
}

emotify()
