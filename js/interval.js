function updateSaveTime(now) {

  let diff = floor((now - lastSaved) / 1000)
  if (diff < 121) {
    document.getElementById("nameTime").textContent = diff + " seconds ago"
  } else {
    document.getElementById("nameTime").textContent = "over 2 minutes ago"
  }

}

function updateSaveName() {
  document.getElementById("nameDisplay").textContent = board
}

setInterval(
  () => {
    if (lastSaved == "never") {
      document.getElementById("nameTime").textContent = ""
    } else {
      updateSaveTime(Date.now());
    }
  },
  20000
)
