chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "open_new_tab"){
      // dont open url if already opened
      chrome.tabs.query({"url": request.url}, function(tabs){
        if(tabs.length === 0){
          chrome.tabs.create({"url": request.url});
        }
      });
    }
});
