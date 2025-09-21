document.getElementById("searchBtn").addEventListener("click", async () => {
  try {
    // Read copied text from clipboard
    const text = await navigator.clipboard.readText();
    if (!text) {
      alert("No text found in clipboard!");
      return;
    }

    // Redirect to btdig search in new tab
    const searchUrl = `https://btdig.com/search?q=${encodeURIComponent(text.trim())}`;
    chrome.tabs.create({ url: searchUrl });
  } catch (err) {
    alert("Clipboard read failed: " + err);
  }
});
