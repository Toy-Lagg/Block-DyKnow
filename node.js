function uninstallDyKnow() {
  chrome.management.uninstall("kmpjlilnemjciohjckjadmgmicoldglf", {showConfirmDialog: true});
}

// This will create a button that, when clicked, will uninstall the "DyKnow" extension
var button = document.createElement("button");
button.innerHTML = "Uninstall DyKnow";
button.onclick = uninstallDyKnow;
document.body.appendChild(button);
