var strip_re = new RegExp("<[^>]*>", 'gm');
var next_id1 = 'pnnext'
var next_id2 = 'Blog1_blog-pager-older-link'
var next_re = new RegExp("^\\s*next\\s*$", 'i');

var els = document.body.getElementsByTagName('a');
var elsLen = els.length;
var found = false;

for (i = 0; i < elsLen; i++) {
  if (els[i].rel == 'next' ||
      els[i].id == next_id1 ||
      els[i].id == next_id2 ||
      next_re.test(els[i].innerHTML.replace(strip_re, '')))
  {
    document.location.href = els[i].href;
    break;
  }
}
