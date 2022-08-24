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

JOURNAL = [
    {
      "id": null,
      "title": "",
      "description": "",
      "quests": [
        {
          "title": "",
          "tasks": [
            {
              "name": "",
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
drawJournal()

document.getElementById("overlay").style.display = "none"
