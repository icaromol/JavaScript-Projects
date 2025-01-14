const PROJECT_NAME = "Template para Projetos";

// This sets the tab’s title directly
document.title = PROJECT_NAME;

// If you also want <h1> to match
document.getElementById("project-title").textContent =
  PROJECT_NAME.toUpperCase();
document.getElementById("header-title").textContent = PROJECT_NAME;

// Grab code blocks by ID
const htmlBlock = document.getElementById("tab-html");
const cssBlock = document.getElementById("tab-css");
const jsBlock = document.getElementById("tab-js");

// Fetch the code from the server
fetch("/code")
  .then((response) => response.json())
  .then((data) => {
    // data.html, data.css, data.js contain the file contents
    htmlBlock.textContent = data.html;
    cssBlock.textContent = data.css;
    jsBlock.textContent = data.js;
  })
  .catch((err) => console.error("Failed to fetch code:", err));

// SINGLE Tab switching logic
const tabs = document.querySelectorAll(".tab");
const codeBlocks = document.querySelectorAll(".code-block");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Hide all code blocks
    codeBlocks.forEach((cb) => cb.classList.remove("active"));

    // Add 'active' to clicked tab
    tab.classList.add("active");
    const target = tab.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});
