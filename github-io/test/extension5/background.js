chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {code: "changeColor.js"})
});