import { JOURNAL, DEFAULT_JOURNAL, SELECTED_INDEX, modifyJournal, pushHistory, spliceHistory } from "./defaultJournal.js"
import { drawJournal } from "./domFunctions.js";

// DOM MANIPULATION AND SCRAPING
function saveJournal() {
  localStorage.setItem("JOURNAL", JSON.stringify(JOURNAL));
}

function changesMade(saved) {
  pushHistory(JSON.parse(JSON.stringify(JOURNAL)))
  saveJournal()
}

export function del(what, i, j) {
  if (what == "quest") removeQuest(i)
  if (what == "task") removeTask(i)
  if (what == "sub") removeSub(i, j)
  changesMade()
}

export function add(what, i) {
  if (what == "quest") addQuest()
  if (what == "task") addTask()
  if (what == "sub") addSub(i)
  changesMade()
}

function removeSub(task, sub) {

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
  modifyJournal(JSON.parse(JSON.stringify(JOURNAL_HISTORY[JOURNAL_HISTORY.length - 1])))
  spliceHistory()
  drawJournal()
}

function removeTask(task) {

  const filteredTasks = JOURNAL[0].quests[SELECTED_INDEX].tasks.filter(d => d.index != task)

  // update journal
  JOURNAL[0].quests[SELECTED_INDEX].tasks = filteredTasks

  drawJournal()

}

function removeQuest(quest) {

  if (JOURNAL[0].quests.length < 2) {
    alert("Cannot delete only quest")
    return
  }

  const filteredQuests = JOURNAL[0].quests.filter(d => d.i != quest)

  // update JOURNAL
  JOURNAL[0].quests = filteredQuests

  // constrain SELECTED_INDEX to length of quests
  if (SELECTED_INDEX > JOURNAL[0].quests.length - 1)
    modifySelected(JOURNAL[0].quests.length - 1)

  drawJournal()

}

function undoRemove(which) {

  if (DELETED.length == 0) return
  updateDeleted("remove", which)

  drawJournal()

}

function addSub(task) {

  const subTemplate = {
    name: "",
    placeholder: "sub-task",
    complete: false,
    i: JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs.length - 1
  }

  JOURNAL[0].quests[SELECTED_INDEX].tasks[task].subs.push(subTemplate)

  function focusNewSub() {
    const subs = document.getElementsByClassName("task")[task]
    .getElementsByClassName("subtask")
    const index = subs.length - 1

    subs[index].children[0].focus()
  }

  drawJournal(null, focusNewSub)

  // focus new element
  
}

function addQuest() {

  JOURNAL[0].quests.push({
    reward: "reward",
    selected: false,
    tasks: [],
    title: "",
    placeholder: "Quest"
  })

  drawJournal()

}

function addTask() {

  JOURNAL[0].quests[SELECTED_INDEX].tasks.push({
    complete: false,
    name: "",
    placeholder: "Task",
    subs: []
  })

  drawJournal()

}

export function scrapeQuest() {

    const quests = document.getElementById("quests").getElementsByClassName("quest")
    
    for (let i in quests) {
      if (i == "length") break
      // get the selected quest name from the DOM 
      const questInput = quests[i].getElementsByClassName("in-out")[0]
      JOURNAL[0].quests[i].title = questInput.value
      JOURNAL[0].quests[i].placeholder = questInput.placeholder
    }

    // get the tasks from the DOM
    const tasksDOM = document.getElementById("tasks").getElementsByClassName("task")

    // create object for each task
    let tasksObj = []
    for (let task of tasksDOM) {

        // get the text for each task
        const taskInput = task.getElementsByClassName('in-out')[0]

        // get subtasks from the DOM
        const subgroup = task.getElementsByClassName('subtasks')[0].getElementsByClassName("subtask")
        // create the subtask object for this task
        let subtasks = []
        for (let subtask of subgroup) {  
            // get the text content from the DOM
            const subInput = subtask.getElementsByClassName('in-out')[0]
            subtasks.push({
                "name": subInput.value,
                "placeholder": subInput.placeholder,
                "complete": false
            })
        }

        // add to array of task objects
        tasksObj.push({
            "name": taskInput.value, 
            "placeholder": taskInput.placeholder, 
            "complete": false,
            "subs" : subtasks
        })
    }

    // amend tasks for selected quest
    JOURNAL[0].quests[SELECTED_INDEX].tasks = tasksObj
    JOURNAL[0].quests[SELECTED_INDEX].reward = "reward"

    changesMade()

}

export function load() {
  if (localStorage.JOURNAL) {
    modifyJournal(JSON.parse(localStorage.JOURNAL))
  } else {
    modifyJournal(DEFAULT_JOURNAL)
  }
  saveJournal()
  drawJournal()
}