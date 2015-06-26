// Saves options to chrome.storage
function save_options() {
  var domain = document.getElementById('domain').value;
  chrome.storage.sync.set({
    domain: domain
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    domain: 'http://'
  }, function(items) {
    document.getElementById('domain').value = items.domain;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
