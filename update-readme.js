// Function to fetch Markdown file content
async function fetchMarkdownContent(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
      }
      return await response.text();
  } catch (error) {
      console.log(`Error fetching data: ${error}`);
      return null;
  }
}

// Function to update Markdown file content
async function updateMarkdownFile(url, newContent) {
  try {
      const response = await fetch(url, {
          method: 'PUT',
          body: newContent,
          headers: {
              'Content-Type': 'text/plain'
          }
      });
      if (!response.ok) {
          throw new Error(`Failed to update data: ${response.status}`);
      }
      console.log('Markdown file updated successfully.');
  } catch (error) {
      console.error(`Error updating file: ${error}`);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // URL of the Markdown file on GitHub
  const markdownUrl = "https://raw.githubusercontent.com/anteroul/anteroul/main/README.md";

  // Fetch Markdown content
  const markdownContent = await fetchMarkdownContent(markdownUrl);
  if (!markdownContent) {
      return;
  }

  // Detect color scheme and update Markdown content
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const oldText = isDarkMode ? 'theme=default' : 'theme=merko';
  const newText = isDarkMode ? 'theme=merko' : 'theme=default';

  const modifiedContent = markdownContent.replace(oldText, newText);

  // Update Markdown file
  await updateMarkdownFile(markdownUrl, modifiedContent);
});