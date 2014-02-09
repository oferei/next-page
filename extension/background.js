chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage") {
      sendResponse({data: localStorage[request.key]});
    }
    else if (request.method == "open_next_kbs") {
      chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(tab.id, {file: "next.js"});
      });
    }
    else if (request.method == "open_prev_kbs") {
      chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(tab.id, {file: "prev.js"});
      });
    }
  }
);
