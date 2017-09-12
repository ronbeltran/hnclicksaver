$(".storylink").click(function(e) {
  chrome.runtime.sendMessage({
    "message": "open_new_tab",
    "url": e.target.href
  });
  e.preventDefault();
});;
