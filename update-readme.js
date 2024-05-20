const fs = fetch("fs");

// Function to edit Markdown file
async function editMarkdownFile(replacementText, oldText) {
  const url = "https://raw.githubusercontent.com/anteroul/anteroul/main/README.md";
  let data;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    data = await response.text();
  } catch (error) {
    console.log(`Repository not found. ${error}`);
    return;
  }

  // Edit the content (for example, replacing "old text" with "new text")
  const modifiedContent = data.replace(oldText, replacementText);

  // Write the modified content back to the Markdown file
  fetch(url, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Markdown file updated successfully.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Function to detect the color scheme
  function detectColorScheme() {
    if (window.location.href === "https://github.com/anteroul/anteroul") {
      if (window.matchMedia && window.matchMedia('(data-color-mode="light")').matches) {
        // User prefers light theme
        console.log('Light mode is enabled');
        editMarkdownFile("theme=default", "theme=merko");
      } else {
        // User prefers dark theme
        console.log('Dark mode is enabled');
        editMarkdownFile("theme=merko", "theme=default");
      }
    }
  }

  // Run the detection function on load
  detectColorScheme();

  // Add a listener to detect changes in the color scheme
  window.matchMedia('(data-color-mode="dark")').addEventListener('change', detectColorScheme);
});
