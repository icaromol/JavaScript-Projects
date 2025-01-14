// Helper function to capitalize and add spaces to the project name
const formatProjectName = (name) => {
  // Replace dashes with spaces and capitalize each word
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Extract the project name from the URL
const getProjectName = () => {
  const urlParts = window.location.pathname.split("/").filter(Boolean); // Remove empty parts
  const projectName = urlParts[urlParts.length - 1]; // Get the last part
  return projectName;
};

// Set the project title and document.title based on the URL
const setProjectName = () => {
  const rawProjectName = getProjectName();
  if (!rawProjectName) {
    console.error("No project name found in URL.");
    return null;
  }

  const formattedName = formatProjectName(rawProjectName); // Format the name

  // Set the global constant and document title
  const PROJECT_NAME = formattedName;
  document.title = PROJECT_NAME;

  // Update page elements (e.g., h1 and browser title)
  const projectTitleElement = document.getElementById("project-title");
  const headerTitleElement = document.getElementById("header-title");
  if (projectTitleElement)
    projectTitleElement.textContent = PROJECT_NAME.toUpperCase();
  if (headerTitleElement)
    headerTitleElement.textContent =
      "project" + PROJECT_NAME.replace(/\s+/g, "") + ".html";

  return rawProjectName; // Return the unformatted project name for loading files
};

// Load code files (HTML, CSS, JS) into the code section
const loadProjectCode = (projectName) => {
  const htmlPath = `/projects/${projectName}/index.html`;
  const cssPath = `/projects/${projectName}/styles.css`;
  const jsPath = `/projects/${projectName}/scripts.js`;

  // Load HTML file
  fetch(htmlPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("tab-html").textContent = data; // Insert content into HTML tab
    })
    .catch((err) => console.error(`Failed to load HTML: ${err}`));

  // Load CSS file
  fetch(cssPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("tab-css").textContent = data; // Insert content into CSS tab
    })
    .catch((err) => console.error(`Failed to load CSS: ${err}`));

  // Load JS file
  fetch(jsPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("tab-js").textContent = data; // Insert content into JS tab
    })
    .catch((err) => console.error(`Failed to load JS: ${err}`));
};

// Inject project content into the floating window box
const loadProjectContent = (projectName) => {
  const projectContentPath = `/projects/${projectName}/index.html`; // Path to the project file
  const contentBox = document.getElementById("project-content");

  // Create an iframe to load the project content
  const iframe = document.createElement("iframe");
  iframe.src = projectContentPath; // Set the iframe source
  iframe.className = "project-iframe"; // Assign a class to the iframe
  contentBox.innerHTML = ""; // Clear old content
  contentBox.appendChild(iframe); // Add the iframe

  // Clear the existing content and add the iframe
  contentBox.innerHTML = ""; // Clear old content
  contentBox.appendChild(iframe); // Add the iframe
};

// Initialize tab switching logic
const initializeTabs = () => {
  const tabs = document.querySelectorAll(".tab");
  const codeBlocks = document.querySelectorAll(".code-block");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove 'active' from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      codeBlocks.forEach((cb) => cb.classList.remove("active"));

      // Add 'active' to clicked tab
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });
};

// Load the project description into the quote box
const loadProjectDescription = (projectName) => {
  const descriptionPath = `/projects/${projectName}/projectDescription.txt`; // Path to the text file
  const quoteContentElement = document.querySelector(".quote-content");

  // Fetch the content of the text file
  fetch(descriptionPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load description: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      if (quoteContentElement) {
        quoteContentElement.innerHTML = data.replace(/\n/g, "<br>"); // Set the fetched text content
      } else {
        console.error("Element with class 'quote-content' not found.");
      }
    })
    .catch((err) => console.error(`Error loading project description: ${err}`));
};

// Initialize the page
const initializePage = () => {
  const projectName = setProjectName(); // Set the project name and get raw name
  if (projectName) {
    loadProjectContent(projectName); // Load the project content dynamically
    loadProjectCode(projectName); // Load the project's code files into tabs
    loadProjectDescription(projectName); // Load the project's description
    initializeTabs(); // Initialize tab switching functionality
  } else {
    console.error("Failed to initialize page: No project name found.");
  }
};

// Run the initialization
initializePage();
