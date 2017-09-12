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
