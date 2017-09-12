$(".storylink").click(function(e) {
  var parent = $(e.target).closest("tr");
  var commentsUrl = "https://news.ycombinator.com/item?id=" + parent.attr('id');

  // open the comments page
  chrome.runtime.sendMessage({
    "message": "open_new_tab",
    "url": commentsUrl
  });

  // open the link
  chrome.runtime.sendMessage({
    "message": "open_new_tab",
    "url": e.target.href
  });

  e.preventDefault();
});

$("a").click(function(e) {
  var expr = /https?:\/\/news\.ycombinator\.com\/item\?id\=\d+/;
  var regex = new RegExp(expr);
  var url = e.target.href;

  if(url.match(regex)){
    // open the comments page
    chrome.runtime.sendMessage({
      "message": "open_new_tab",
      "url": url
    });
    e.preventDefault();
  }
});
