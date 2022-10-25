import { modifySelected } from "./js/defaultJournal.js";
import { drawJournal } from "./js/domFunctions.js";
import { scrapeQuest, load, add, del } from "./js/questFunctions.js";
import { JOURNAL } from "./js/defaultJournal.js"

// allow DOM access to certain variables
window.add = add
window.del = del
window.modifySelected = modifySelected
window.drawJournal = drawJournal
window.JOURNAL = JOURNAL

// load the journal from local memory
load()

    // add click events
document.getElementsByClassName("journal")[0].oninput = scrapeQuest
document.getElementById("overlay").style.display = "none"

