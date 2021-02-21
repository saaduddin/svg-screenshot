chrome.browserAction.onClicked.addListener(function(tabs) {

    
    chrome.browserAction.onClicked.addListener(function(tab){
        chrome.browserAction.setIcon({
            path : "icon_loading.png",
            tabId: tab.id
          });
        });


    chrome.tabs.executeScript(null, {file: "main.js"});
    
 });