$(".storylink").click(function(e) {
  var parent = $(e.target).parent().parent();
  var commentsUrl = "https://news.ycombinator.com/item?id=" + parent.attr('id');

  // open the link
  chrome.runtime.sendMessage({
    "message": "open_new_tab",
    "url": e.target.href
  });

  // open the comments page
  chrome.runtime.sendMessage({
    "message": "open_new_tab",
    "url": commentsUrl
  });

  e.preventDefault();
});
