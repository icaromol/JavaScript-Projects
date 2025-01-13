const createCounter = function (n) {
  return () => {
    return n++;
  };
};

const counter = createCounter(10);

// Collect the results of calling the counter
const results = `
      <p>JS COUNTER</p>
      <br>
      <p>Counter 1: ${counter()}</p>
      <p>Counter 2: ${counter()}</p>
      <p>Counter 3: ${counter()}</p>
    `;

// Insert test results into the DOM
document.querySelector("#header").innerHTML = results;
