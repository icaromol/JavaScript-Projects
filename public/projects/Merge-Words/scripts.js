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

// Function to update the results
function updateResults(word1, word2) {
  const merged = mergeStrings(word1, word2);
  const results = `
    <p><span class="variable">Word 1:</span><span class="value">${word1}</span></p>
    <p><span class="variable">Word 2:</span><span class="value">${word2}</span></p>
    <p><span class="variable">Merged Words:</span><br><span class="value">${merged}</span></p>
  `;
  document.querySelector("#results").innerHTML = results;
}

// Handle button click
document.getElementById("mergeButton").addEventListener("click", () => {
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;

  if (word1 && word2) {
    updateResults(word1, word2);
  } else {
    alert("Please enter both words.");
  }
});

// Initial placeholder results
updateResults("Berenice", "Ícaro");
