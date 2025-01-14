let counterValue = 10; // Default starting value

const createCounter = function (n) {
  return () => {
    return n++;
  };
};

let counter = createCounter(counterValue);

// Function to generate and display the results
const updateResults = () => {
  const results = `
    <p><span class="variable">First:</span> <span class="value">${counter()}</span></p>
    <p><span class="variable">Second:</span> <span class="value">${counter()}</span></p>
    <p><span class="variable">Third:</span> <span class="value">${counter()}</span></p>
    <p><span class="variable">...</span></p>
  `;
  document.getElementById("results").innerHTML = results;
};

// Event listener for the "Set Counter" button
document.getElementById("setCounter").addEventListener("click", () => {
  const startValue = parseInt(document.getElementById("startValue").value, 10);

  // Ensure a valid number is entered
  if (!isNaN(startValue)) {
    counterValue = startValue;
    counter = createCounter(counterValue); // Reset counter
    updateResults(); // Update results with the new counter
  } else {
    alert("Please enter a valid number.");
  }
});

// Initial display of results
updateResults();
