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
  results += "<p>JS To be or not to be</p><br></br><p>Test 1: passed</p>";
} catch (error) {
  results += `<p>JS To be or not to be</p><br><p>Test 1: failed - ${error.message}</p>`;
}

try {
  expect(5).toBe(10);
  results += "<p>Test 2: passed</p>";
} catch (error) {
  results += `<p>Test 2: failed - ${error.message}</p>`;
}

try {
  expect(5).notToBe(10);
  results += "<p>Test 3: passed</p>";
} catch (error) {
  results += `<p>Test 3: failed - ${error.message}</p>`;
}

try {
  expect(5).notToBe(5);
  results += "<p>Test 4: passed</p>";
} catch (error) {
  results += `<p>Test 4: failed - ${error.message}</p>`;
}

// Insert test results into the DOM
document.querySelector("#header").innerHTML = results;
console.log(results);
