const fs = require('fs');
const path = require('path');

function editMarkdownFile(replacementText, oldText) {
  const filePath = path.join(__dirname, 'README.md');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    const modifiedContent = data.replace(oldText, replacementText);

    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        return;
      }
      console.log('Markdown file updated successfully.');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Function to detect the color scheme
  function detectColorScheme() {
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

  // Run the detection function on load
  detectColorScheme();

  // Add a listener to detect changes in the color scheme
  window.matchMedia('(data-color-mode="dark")').addEventListener('change', detectColorScheme);
});
