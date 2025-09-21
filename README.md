# PSARips → BTDig Redirect

**Simple Chrome extension** that copies a selected release name (for example from PSARips or any site), and opens a BTDig search for that exact name in a new tab. It also adds a right-click context-menu item so you can select text and "Search on BTDig" directly.

> This project is lightweight and designed to work with almost any site where you can select or copy a release name. It avoids having to manually paste names into BTDig and helps skip extra ad pages by opening the search results directly.

---

## Features

* Automatically pastes the current clipboard text into the popup input when opened.
* Opens `https://btdig.com/search?q=<your copied text>` in a new tab.
* Adds a **right-click context menu** entry (`Search on BTDig`) that appears when text is selected on any page.
* Toolbar icon support (16/48/128 px).
* Small, privacy-conscious: it does **not** send your clipboard contents to any external server (except when you choose to search, which opens BTDig in a new tab).

> Note: To avoid CORS or scraping issues the extension only redirects to BTDig — it does not attempt to scrape the site itself.

---

## Files

Example structure for the repo:

```
psarips-btdig-redirect/
├─ manifest.json
├─ background.js
├─ popup.html
├─ popup.js
├─ icon16.png
├─ icon48.png
├─ icon128.png
└─ README.md
```

---

## Installation (for local testing)

1. Clone or copy this repository into a folder on your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will appear in the toolbar (use the puzzle icon to pin it).

---

## Usage

* **From any page:** Select text (release name), right-click and choose **Search on BTDig**. A new tab will open with BTDig search results for the exact text you selected.

* **From the toolbar popup:** Copy the release name to your clipboard, click the extension icon and press **Search Copied Name**. The extension will open BTDig search in a new tab for the copied text.

---

## Permissions

The extension uses the following permissions in `manifest.json`:

* `contextMenus` — to add the right-click menu entry.
* `tabs` — to open new tabs for search results.
* `clipboardRead` — to read the clipboard when user opens the popup (used purely locally in the browser).

These permissions are minimal and used only for the described behaviors.

---

## Customization

* Change the `default_popup` or remove the popup entirely if you prefer context-menu only usage.
* Replace `https://btdig.com` with another indexer if you prefer.
* Add icons in the project root and update filenames in `manifest.json`.

---

## Legal & Ethics

This extension only automates opening a search page on a public indexer (BTDig). It does **not** host or distribute copyrighted content.

Be careful where you download from: downloading copyrighted material without permission may be illegal in your jurisdiction. The author is not responsible for how you use results from BTDig or other indexers.

---

## Contributing

PRs welcome. Suggested improvements:

* Auto-detect and trim release name noise (e.g., site markup wrappers) before searching.
* Add an options page to set a preferred indexer domain or default search behavior.

---

## Adding to GitHub

1. Create a new repository on GitHub.
2. Initialize git in your local folder and push:

```bash
git init
git add .
git commit -m "Initial commit — PSARips → BTDig Redirect"
git remote add origin https://github.com/gayan-tharuka/Magnet-Finder
git branch -M main
git push -u origin main
```

---
