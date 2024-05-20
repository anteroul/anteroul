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

// Manually toggle the theme
async function main() {
  const darkMode = true; // Set this manually

  if (darkMode) {
    await editMarkdownFile("theme=merko", "theme=default");
  } else {
    await editMarkdownFile("theme=default", "theme=merko");
  }
}

main();