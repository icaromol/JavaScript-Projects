function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) return true;
      throw new Error("Not Equal");
    },
    notToBe: function (expected) {
      if (val !== expected) return true;
      throw new Error("Equal");
    },
  };
}

// Add event listener for the test button
document.querySelector("#testButton").addEventListener("click", () => {
  // Get user input values
  const number1 = parseFloat(document.querySelector("#number1").value);
  const number2 = parseFloat(document.querySelector("#number2").value);

  // Validate inputs
  if (isNaN(number1) || isNaN(number2)) {
    document.querySelector(
      "#results"
    ).innerHTML = `<p>Please enter valid numbers in both fields.</p>`;
    return;
  }

  // Test cases to run
  const tests = [
    {
      test: () => expect(number1).toBe(number1),
      description: `expect(${number1}).toBe(${number1})`,
    },
    {
      test: () => expect(number1).toBe(number2),
      description: `expect(${number1}).toBe(${number2})`,
    },
    {
      test: () => expect(number1).notToBe(number2),
      description: `expect(${number1}).notToBe(${number2})`,
    },
    {
      test: () => expect(number1).notToBe(number1),
      description: `expect(${number1}).notToBe(${number1})`,
    },
  ];

  // Generate and display results
  const results = tests
    .map(({ test, description }) => {
      try {
        test();
        return `<p><span class="variable">${description};</span><br><span class="value">True</span></p>`;
      } catch (error) {
        return `<p><span class="variable">${description};</span><br><span class="value">Failed - ${error.message}</span></p>`;
      }
    })
    .join("");

  document.querySelector("#results").innerHTML = results;
});
