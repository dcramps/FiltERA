console.log("Finding threads to remove");
var threads = document.getElementsByClassName('discussionListItem');
for (var z = 0; z < threads.length; z++) {
  var mains = threads[z].getElementsByClassName('main');
  for (var x = 0; x < mains.length; x++) {
    var titles = mains[x].getElementsByClassName('title');
    for (var y = 0; y < titles.length; y++) {
      var text = titles[y].innerText;
      if (text.match(/.*Trump.*/i) != null) {
        console.log('Removing ' + z + ": " + text);
        threads[z].parentNode.removeChild(threads[z]);
      }
    }
  }
}
