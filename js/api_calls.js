function getAdventures(board, password = "") {
  let noPassword = password == ""
  if (noPassword) {
    password = Math.random(9999999999) + Math.random(9999999999)
  }
  let url = "https://quest-journal-api.glitch.me/get_board/" + board + "/" + password
  loading(true)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data == "wrong password") {
        loading(false);
        loadModal.style.display = "block"
        document.getElementById("loadPasswordWarning").display = "block"
        document.getElementById("loadPasswordWarning").textContent = "Incorrect password"
      } else {
        adventures = data
        loading(false);
        loadModal.style.display = "none"
        populate();
      }
    })
}

function checkAdventure(id) {

  // if id is empty it will cause an error on GET
  // so assign it to a value that will not
  // be found
  if (id == "") {
    id = "random" + Math.random(99999999) + Math.random(9999999)
  }

  let url = "https://quest-journal-api.glitch.me/check_board/" + id

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return(data.name_taken)
    })


}

function newJournal(id) {
  checkAdventure(id).then(conflict => {
    if (conflict) {
      conflictWarning.style.display = "block"
    } else {
      conflictWarning.style.display = "none"
      saveModal.style.display = "none"
      saveQuests(id)
    }
  })

}

function saveQuests() {
  id = board
  password = document.getElementById("savePassword").value
  if (password == "") {
    password = Math.random(999999999999) + Math.random(1212212121212)
  }
  loadingMini(true)
  board = id
  updateSaveName()
  lastSaved = Date.now()
  updateSaveTime(lastSaved)

  let url = 'https://quest-journal-api.glitch.me/save_board'
  let bod = {}
  bod[id] = adventures
  bod["password"] = password

  let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        bod
      )
  }

  fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data == "quests saved") {
          document.getElementById("savePasswordWarning").style.display = "none"
          saveModal.style.display = "none"
        } else {
          document.getElementById("savePasswordWarning").style.display = "block"
        }
        loadingMini(false)
    })

}

function loadQuests() {
  id = document.getElementById('loadInput').value
  password = document.getElementById('loadPassword').value
  lastSaved = "never"
  loading(true)
  document.getElementById("loadModal").style.display = "none"
  checkAdventure(id).then(found => {
    if (found) {
      loadWarning.style.display = "none"
      document.getElementById("loadPasswordWarning").display = "none"
      board = id;
      updateSaveName();
      getAdventures(id, password);

    } else {
      document.getElementById("loadModal").style.display = "block"
      loadWarning.style.display = "block"

    }
  })

}

function loading(x) {

  if (x) {

    document.getElementById("container").style.display = "none"
    document.getElementById("loadingModal").style.display = "block"

  } else {

    document.getElementById("container").style.display = "block"
    document.getElementById("loadingModal").style.display = "none"

  }

}

function loadingMini(x) {
  if (x) {

    document.getElementById("mini-loading").style.display = "block"

  } else {

    document.getElementById("mini-loading").style.display = "none"

  }
}
