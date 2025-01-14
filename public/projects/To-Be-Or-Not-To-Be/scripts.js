function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true; // Values are strictly equal
      } else {
        throw new Error("Not Equal"); // Throw an error if not equal
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true; // Values are strictly not equal
      } else {
        throw new Error("Equal"); // Throw an error if equal
      }
    },
  };
}

// Generate test results
let results = "";

try {
  expect(5).toBe(5);
  results += `
    <p><span class="variable">expect(5).toBe(5);</span><br><span class="value">True</span></p>
  `;
} catch (error) {
  results += `
    <p><span class="variable">expect(5).toBe(5);</span><br><span class="value">Failed - ${error.message}</span></p>
  `;
}

try {
  expect(5).toBe(10);
  results += `
    <p><span class="variable">expect(5).toBe(10);</span><br><span class="value">True</span></p>
  `;
} catch (error) {
  results += `
    <p><span class="variable">expect(5).toBe(10);</span><br><span class="value">Failed - ${error.message}</span></p>
  `;
}

try {
  expect(5).notToBe(10);
  results += `
    <p><span class="variable">expect(5).notToBe(10);</span><br> <span class="value">True</span></p>
  `;
} catch (error) {
  results += `
    <p><span class="variable">expect(5).notToBe(10);</span><br><span class="value">Failed - ${error.message}</span></p>
  `;
}

try {
  expect(5).notToBe(5);
  results += `
    <p><span class="variable">expect(5).notToBe(5);</span><br><span class="value">True</span></p>
  `;
} catch (error) {
  results += `
    <p><span class="variable">expect(5).notToBe(5);</span><br><span class="value">Failed - ${error.message}</span></p>
  `;
}

// Insert test results into the DOM
document.querySelector("#header").innerHTML = results;
