// Get the modal
var introModal = document.getElementById("myModal");
var helpModal = document.getElementById("helpModal")

// Get the button that opens the modal
var btn = document.getElementById("helpButton");

// When the user clicks on the button, open the help modal
btn.onclick = function() {
  helpModal.style.display = "block";
}

// Get the <span> element that closes the modal
var introSpan = document.getElementById("closeIntro");
var helpSpan = document.getElementById("closeHelp");

// When the user clicks on <span> (x), close the modal
introSpan.onclick = function() {
  introModal.style.display = "none";
}

helpSpan.onclick = function() {
  helpModal.style.display = "none";
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

introModal.style.display = "block";
