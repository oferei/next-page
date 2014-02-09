// Get configuration
var modifier1 = undefined;
chrome.extension.sendRequest({method: 'getLocalStorage', key: 'favorite_modifier1'}, function(response) {
  modifier1 = response.data;
});

var modifier2 = undefined;
chrome.extension.sendRequest({method: 'getLocalStorage', key: 'favorite_modifier2'}, function(response) {
  modifier2 = response.data;
});


function get_modifier(modifier, event) {
  if (modifier == 'none') {
    return true;
  } else if (modifier == 'ctrl') {
    return event.ctrlKey || event.metaKey;
  } else if (modifier == 'alt') {
    return event.altKey;
  } else if (modifier == 'shift') {
    return event.shiftKey;
  } else {
    // unreachable
    console.log('unknown modifier: ' + modifier);
    return false;
  }
}

window.addEventListener("keydown", function(event) {

  var modifier = event.ctrlKey || event.metaKey;

  if (get_modifier(modifier1 || 'ctrl', event) && get_modifier(modifier2 || 'shift', event)) {
    if (event.keyCode == 39) { // 39 = right
      // Send message to background page
      chrome.extension.sendRequest({method: 'open_next_kbs'}, function(response) {
        // Do stuff on successful response
      });
    }
    if (event.keyCode == 37) { // 37 = left
      // Send message to background page
      chrome.extension.sendRequest({method: 'open_prev_kbs'}, function(response) {
        // Do stuff on successful response
      });
    }
  }
}, false);
