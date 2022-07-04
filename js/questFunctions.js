// DOM MANIPULATION AND SCRAPING
function journalRemoveSub(task, sub) {

  JOURNAL_HISTORY.push(structuredClone(JOURNAL))

  const filteredSubs = JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs.filter(d => d.j != sub)

  // update journal
  JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs = filteredSubs
  
  drawJournal()

}

function undo() {
  if (JOURNAL_HISTORY.length == 0) {
    alert("Nothing to undo")
    return
  }
  JOURNAL = structuredClone(JOURNAL_HISTORY[JOURNAL_HISTORY.length - 1])
  JOURNAL_HISTORY.splice(JOURNAL_HISTORY.length - 1, 1)
  drawJournal()
}

function journalRemoveTask(task) {

  JOURNAL_HISTORY.push(structuredClone(JOURNAL))

  const filteredTasks = JOURNAL[0].quests[SELECTED_INDEX].tasks.filter(d => d.index != task)

  // update journal
  JOURNAL[0].quests[SELECTED_INDEX].tasks = filteredTasks

  drawJournal()

}

function journalRemoveQuest(quest) {

  JOURNAL_HISTORY.push(structuredClone(JOURNAL))

  const filteredQuests = JOURNAL[0].quests.filter(d => d.i != quest)

  // update JOURNAL
  JOURNAL[0].quests = filteredQuests

  // constrain SELECTED_INDEX to length of quests
  if (SELECTED_INDEX > JOURNAL[0].quests.length - 1)
    SELECTED_INDEX = JOURNAL[0].quests.length - 1

  drawJournal()

}

function undoRemove(which) {

  if (DELETED.length == 0) return
  updateDeleted("remove", which)

  drawJournal()

}

function journalAddSub(task) {
  JOURNAL_HISTORY.push(structuredClone(JOURNAL))

  const subTemplate = {
    name: "",
    complete: false,
    i: JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs.length - 1
  }

  JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs.push(subTemplate)

  drawJournal()

}

function journalAddQuest() {
  JOURNAL_HISTORY.push(structuredClone(JOURNAL))
  JOURNAL[0].quests.push({
    reward: "reward",
    selected: false,
    tasks: [],
    title: "Quest"
  })

  drawJournal()
}

function journalAddTask() {
  JOURNAL_HISTORY.push(structuredClone(JOURNAL))
  JOURNAL[0].quests[SELECTED_INDEX].tasks.push({
    complete: false,
    name: "Task",
    subs: []
  })

  drawJournal()
}

function scrapeQuest() {

    JOURNAL_HISTORY.push(structuredClone(JOURNAL))
    const quests = document.getElementById("quests").getElementsByClassName("quest")
    
    for (let i in quests) {
      if (i == "length") break
      // get the selected quest name from the DOM 
      JOURNAL[0].quests[i].title = quests[i].getElementsByClassName("in-out")[0].textContent
    }

    // get the tasks from the DOM
    const tasksDOM = document.getElementById("tasks").getElementsByClassName("task")

    // create object for each task
    let tasksObj = []
    for (let task of tasksDOM) {

        // get the text for each task
        const taskText = task.getElementsByClassName('in-out')[0].textContent

        // get subtasks from the DOM
        const subgroup = task.getElementsByClassName('subtasks')[0].getElementsByClassName("subtask")
        // create the subtask object for this task
        let subtasks = []
        for (let subtask of subgroup) {  
            // get the text content from the DOM
            const subText = subtask.getElementsByClassName('in-out')[0].textContent
            subtasks.push({
                "name": subText,
                "complete": false
            })
        }

        // add to array of task objects
        tasksObj.push({
            "name": taskText, 
            "complete": false,
            "subs" : subtasks
        })
    }

    // amend tasks for selected quest
    JOURNAL[0].quests[SELECTED_INDEX].tasks = tasksObj
    JOURNAL[0].quests[SELECTED_INDEX].reward = "reward"

}

// DATA AND API
async function getQuests(user, password = false) {

    const url = "https://quest-journal-api.glitch.me/get_journals/" + user

    const quests = await fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })

    return await quests
}

function saveLocal() {
  // read json

  // amend selected quest with global QUEST variable 
  const selectedIndex = whichSelected()

  // save json
}

function saveJournal() {
  
    let url = 'https://quest-journal-api.glitch.me/save_journal'
    let bod = {}
    bod.id = JOURNAL[0].id
    bod.journal = JOURNAL[0]
  
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
          console.log(data)
      })
  
  }