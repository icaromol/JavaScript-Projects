function mergeStrings(word1, word2) {
  let merged = "";
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      merged += word1[i]; // Add character from word1
    }
    if (i < word2.length) {
      merged += word2[i]; // Add character from word2
    }
  }

  return merged;
}

let word1 = "barbara";
let word2 = "icaro";

// Collect the results
const results = `
  <p>JS MERGE WORDS</p>
  <br>
  <p>Palavra 1: ${word1}</p>
  <p>Palavra 2: ${word2}</p>
  <p>Merged Words: ${mergeStrings(word1, word2)}</p>
`;

// Insert test results into the DOM
document.querySelector("#header").innerHTML = results;
