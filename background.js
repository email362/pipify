chrome.action.onClicked.addListener((tab) => {
  console.log(tab.id);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['pipify.js']
  });
});