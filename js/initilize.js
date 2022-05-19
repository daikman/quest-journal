let JOURNAL
let SELECTED_INDEX = 0
let SELECTED_JOURNAL = 0

// get data from API
getQuests("david", false).then(data => {
    JOURNAL = data
    drawJournal()
});
