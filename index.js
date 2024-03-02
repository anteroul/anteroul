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

async function getGithubColorTheme() {
  const url = "https://api.github.com/";

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was invalid.");
      }
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const element = doc.getElementsByClassName("turbo-progress-bar");
      const theme = element.getAttribute("data-color-mode").text();
      console.log(`Element with data-theme attribute: ${element}`);
      console.log(`Element with data-theme attribute: ${theme}`);
      return theme;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

async function main() {
  const darkMode = getGithubColorTheme();

  if (darkMode == "light")
    editMarkdownFile("theme=default", "theme=merko");
  else
    editMarkdownFile("theme=merko", "theme=default");
}

main();