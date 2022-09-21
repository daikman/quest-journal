let JOURNAL = []
let JOURNAL_HISTORY = []
let SELECTED_INDEX = 0
let SELECTED_JOURNAL = 0
 
// array of objects that were deleted, along with where they were deleted from (i.e., parent object)
let DELETED = []

applyHandles("loginModal.handlebars", "login-modal", null)

document.getElementById("overlay").style.display = "none"

// init auto-saving
// setInterval(() => {
//     if (JOURNAL.length == 0) return
//     saveJournal(false, false)
//     console.log("autosaved")
// }, 10000)
