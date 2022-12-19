<!-- Block Dyknow Chrome extension -->
<script>
  // Check if the extension is installed
  if (chrome.management.get('com.dyknow.chromeextension')) {
    // If the extension is installed, remove it
    chrome.management.uninstall('com.dyknow.chromeextension', function() {
      console.log('Dyknow extension uninstalled');
    });
  }
</script>