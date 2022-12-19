chrome.management.uninstall("kmpjlilnemjciohjckjadmgmicoldglf", 
                            {
  showConfirmDialog: true
}, function(result) {
  if (chrome.runtime.lastError) {
    // An error occurred during the uninstallation process
  } else {
    // The extension was successfully uninstalled
  }
});
