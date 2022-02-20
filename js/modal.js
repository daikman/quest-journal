// Get the modal
var introModal = document.getElementById("myModal");
var helpModal = document.getElementById("helpModal")
var saveModal = document.getElementById("saveModal")
var saveInput = document.getElementById("saveInput")
var loadModal = document.getElementById("loadModal")
let conflictWarning = document.getElementById("saveWarning")
conflictWarning.style.display = "none"
let loadWarning = document.getElementById("loadWarning")
loadWarning.style.display = "none"

// Get the button that opens the modal
var btn = document.getElementById("helpButton");
// When the user clicks on the button, open the help modal
btn.onclick = function() {
  helpModal.style.display = "block";
}

// Get the button that opens the modal
var saveBtn = document.getElementById("saveButton");
// When the user clicks on the button, open the help modal
saveBtn.onclick = function() {
  if (board == "default") {
    saveModal.style.display = "block";
  } else {
    // saveModal.style.display = "none";
    saveQuests(board)
  }
}

// Get the button that opens the modal
var loadBtn = document.getElementById("loadButton");
// When the user clicks on the button, open the help modal
loadBtn.onclick = function() {
  loadModal.style.display = "block";
}


// Get the <span> element that closes the modal
var introSpan = document.getElementById("closeIntro");
var helpSpan = document.getElementById("closeHelp");
var saveSpan = document.getElementById("closeSave");
var loadSpan = document.getElementById("closeLoad");
// When the user clicks on <span> (x), close the modal
introSpan.onclick = function() {
  introModal.style.display = "none";
}
helpSpan.onclick = function() {
  helpModal.style.display = "none";
}
saveSpan.onclick = function() {
  saveModal.style.display = "none";
}
loadSpan.onclick = function() {
  loadModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == introModal) {
    introModal.style.display = "none";
  }
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
}

saveInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("saveModalButton").click();
  }
});

loadInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("loadModalButton").click();
  }
});

// pop up Welcome
// introModal.style.display = "block";
