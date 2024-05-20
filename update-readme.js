import { readFile, writeFile } from 'fs';
import { join } from 'path';

function editMarkdownFile(replacementText, oldText) {
  const filePath = join(__dirname, 'README.md');

  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    const modifiedContent = data.replace(oldText, replacementText);

    writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        return;
      }
      console.log('Markdown file updated successfully.');
    });
  });
}

function main() {
  const htmlElement = document.querySelector('html');
  const theme = htmlElement.getAttribute('data-color-mode');
  
  if (theme === 'light') {
    editMarkdownFile("theme=default", "theme=merko");
  } else {
    editMarkdownFile("theme=merko", "theme=default");
  }
}

main();