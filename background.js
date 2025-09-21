chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchOnBTDig",
    title: "Search on BTDig",
    contexts: ["selection"] // only show when text is selected
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchOnBTDig" && info.selectionText) {
    const query = info.selectionText.trim();
    const url = `https://btdig.com/search?q=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url });
  }
});
