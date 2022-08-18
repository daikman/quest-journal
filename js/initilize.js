let JOURNAL
let JOURNAL_HISTORY = []
let SELECTED_INDEX = 0
let SELECTED_JOURNAL = 0

// array of objects that were deleted, along with where they were deleted from (i.e., parent object)
let DELETED = []


// begin loading
{
    const overlayLoading = Handlebars.templates.overlayLoading
    document.getElementById("overlay").innerHTML = overlayLoading({})
}

const defaultJournals = [
    {
      "id": "default",
      "title": "How to use this",
      "description": "",
      "quests": [
        {
          "title": "Create new task",
          "tasks": [
            {
              "name": "Press the '+' button ",
              "complete": false,
              "subs": [
                { "name": "", "complete": false }
              ]
            }
          ],
          "reward": "",
          "i": "0",
          "selected": true
        }
      ]
    }
  ]

// get data from API
getQuests("david", false).then(data => {
    JOURNAL = data
    drawJournal()
    // end loading
    document.getElementById("overlay").style.display = "none"
});
