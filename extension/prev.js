var strip_re = new RegExp("<[^>]*>", 'gm');
var prev_id1 = 'pnprev'
var prev_id2 = 'Blog1_blog-pager-newer-link'
var prev_re = new RegExp("^\\s*(?:prev|previous)\\s*$", 'i');

var els = document.body.getElementsByTagName('a');
var elsLen = els.length;
var found = false;

for (i = 0; i < elsLen; i++) {
  if (els[i].rel == 'prev' ||
      els[i].id == prev_id1 ||
      els[i].id == prev_id2 ||
      prev_re.test(els[i].innerHTML.replace(strip_re, '')))
  {
    document.location.href = els[i].href;
    break;
  }
}
