function getAdventures(board) {
  let url = "https://quest-journal-api.glitch.me/get_board/" + board
  loading(true)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      adventures = data
    })
    .then(data => {
      loading(false);
      if (board == "default") {
        document.getElementById("myModal").style.display = "block"
      }
      populate();
    })
}

function checkAdventure(id) {

  // if id is empty it will cause an error on GET
  // so assign it to a value that will not
  // be found
  if (id == "") {
    id = "random" + random(99999999) + random(9999999)
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

function saveQuests(id) {
  loadingMini(true)
  board = id
  updateSaveName()
  lastSaved = Date.now()
  updateSaveTime(lastSaved)

  let url = 'https://quest-journal-api.glitch.me/save_board'
  let bod = {}
  bod[id] = adventures

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
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded');
        loadingMini(false)
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

}

function loadQuests(id) {
  lastSaved = "never"
  loading(true)
  document.getElementById("loadModal").style.display = "none"
  checkAdventure(id).then(found => {
    if (found) {
      loadWarning.style.display = "none"
      board = id;
      updateSaveName();
      getAdventures(id);
      loadModal.style.display = "none"
    } else {
      document.getElementById("loadModal").style.display = "block"
      loadWarning.style.display = "block"
    }

    loading(false)
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
