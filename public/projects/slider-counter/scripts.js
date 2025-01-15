function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    reset: function () {
      count = 0; // Reset the counter value to 0
      return count;
    },
    setInitialValue: function (value) {
      count = value; // Updates the internal counter to the given value
      return count; // Returns the updated counter value
    },
    getCount: function () {
      return count;
    },
  };
}

// Create the counter object
const counter = createCounter(0);

// DOM elements
const display = document.getElementById("counter-value");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const slider = document.getElementById("slider");

// Function to update the display value
function updateDisplay(value) {
  display.textContent = value;
  slider.value = value; // Update the slider position
}

// Event listeners for buttons and slider
incrementButton.addEventListener("click", () => {
  const currentValue = counter.getCount();
  if (currentValue < 100) {
    // Check if the value is below the maximum
    const newValue = counter.increment();
    updateDisplay(newValue);
  }
});

decrementButton.addEventListener("click", () => {
  const currentValue = counter.getCount();
  if (currentValue > 0) {
    // Check if the value is above the minimum
    const newValue = counter.decrement();
    updateDisplay(newValue);
  }
});

resetButton.addEventListener("click", () => {
  const resetValue = counter.reset(); // Reset the counter to 0
  updateDisplay(resetValue); // Update the displayed counter value and slider
});

slider.addEventListener("input", () => {
  const newValue = parseInt(slider.value, 10);
  counter.setInitialValue(newValue); // Update the counter value to match the slider
  updateDisplay(newValue); // Update the display
});

// Update slider's background

function updateDisplay(value) {
  display.textContent = value;
  slider.value = value; // Update the slider position
  updateSliderBackground(value); // Update the background dynamically
}

function updateSliderBackground(value) {
  const percentage = (value / 100) * 100; // Calculate the percentage
  slider.style.background = `linear-gradient(to right, #03bcf4 ${percentage}%, #bdc3c7 ${percentage}%)`;
}

// Initialize slider background on page load
updateSliderBackground(counter.getCount());

// Update background on slider input
slider.addEventListener("input", () => {
  const newValue = parseInt(slider.value, 10);
  counter.setInitialValue(newValue); // Update the counter value to match the slider
  updateDisplay(newValue); // Update the display
});
