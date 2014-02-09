function setSelection(id, choice) {
  var select = document.getElementById(id);
  var options = select.getElementsByTagName('option');
  for (var i in options) {
    var child = options[i];
    if (child.value == choice) {
      child.selected = 'selected';
      break;
    }
  }
}

function modifierChanged(event) {
  var select = event.target;

  localStorage['favorite_' + select.id] = select.options[select.selectedIndex].value;

  // Update status to let user know options were saved.
  var status = document.getElementById('status');
  status.innerHTML = 'Options saved.';
  setTimeout(function() {
    status.innerHTML = '';
  }, 750);
}

function restore_options() {
  var favorite = localStorage['favorite_modifier1'];
  if (!favorite) {
    favorite='ctrl';
  }
  setSelection('modifier1', favorite);
  var select1 = document.getElementById('modifier1');
  select1.onchange = modifierChanged;

  var favorite = localStorage['favorite_modifier2'];
  if (!favorite) {
    favorite='shift';
  }
  setSelection('modifier2', favorite);
  var select2 = document.getElementById('modifier2');
  select2.onchange = modifierChanged;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('focus', restore_options);
