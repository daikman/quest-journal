// Get the modal
var introModal = document.getElementById("myModal");
var helpModal = document.getElementById("helpModal")
var saveModal = document.getElementById("saveModal")
var newInput = document.getElementById("newInput")
var loadModal = document.getElementById("loadModal")
let conflictWarning = document.getElementById("conflictWarning")
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
    document.getElementById('newModal').style.display = 'block'
  } else if (adventures["password-for"] == "write" | adventures["password-for"] == "read-write") {
    saveModal.style.display = "block";
    document.getElementById("savePasswordWarning").style.display = "none"
  } else {
    saveQuests()
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
var newSpan = document.getElementById("closeNew");
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
newSpan.onclick = function() {
  newModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == introModal) {
    introModal.style.display = "none";
  }
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
  if (event.target == saveModal) {
    saveModal.style.display = "none";
  }
  if (event.target == newModal) {
    newModal.style.display = "none";
  }
  if (event.target == loadModal) {
    loadModal.style.display = "none";
  }
}

// newInput.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("saveModalButton").click();
//   }
// });

loadInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("loadModalButton").click();
  }
});

document.getElementById("loadPassword").addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("loadModalButton").click();
  }
});

document.getElementById("savePassword").addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("saveModalButton").click();
  }
});

// pop up Welcome
// introModal.style.display = "block";
