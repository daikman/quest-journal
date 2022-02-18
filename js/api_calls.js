function getAdventures(board) {
  let url = "https://quest-journal-api.herokuapp.com/get_board/" + board
  fetch(url)
    .then(response => response.json())
    .then(data => (
      adventures = data
    ))
    .then(data => (
      populate(adventures.quests[0])
    ))
}

function checkAdventure(board) {

  let url = "https://quest-journal-api.herokuapp.com/check_board/" + board

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

  board = id

  let url = 'https://quest-journal-api.herokuapp.com/save_board'
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
        alert("Journal saved")
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

}

function loadQuests(id) {
  checkAdventure(id).then(found => {
    if (found) {
      loadWarning.style.display = "none"
      board = id;
      getAdventures(id);
      loadModal.style.display = "none"
    } else {
      loadWarning.style.display = "block"
    }
  })

}
