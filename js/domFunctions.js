import { 
  JOURNAL,
  SELECTED_JOURNAL, 
  SELECTED_INDEX, modifySelected
 } from "./defaultJournal.js"

function applyHandles(filename, domId, data, after) {

  fetch("./hb-templates/" + filename)
    .then(res => res.text())
    .then(text => {
      const template = Handlebars.compile(text)
      document.getElementById(domId).innerHTML = template(data)
    })
    .then(() => {
      if (after) after()
    })
  
}

export function drawJournal(afterQuests, afterTasks) {

  // contrain SELECTED_INDEX
  if (SELECTED_INDEX < 0) modifySelected(0)
  
  drawQuests(afterQuests)
  drawTasks(afterTasks)
}

function drawQuests(after) {
  const quests = JOURNAL[SELECTED_JOURNAL].quests

  // create quest list
  // add indexes
  for (let i in quests) {
    quests[i].i = i
    quests[i].selected = i == SELECTED_INDEX
  }

  applyHandles("quests.handlebars", "quests", { quests }, after)

}

function drawTasks(after) {
  const quests = JOURNAL[SELECTED_JOURNAL].quests
  const tasks = quests[SELECTED_INDEX]?.tasks

  // add indexes to tasks
  for (let i in tasks) {
    tasks[i].index = i
    for (let j in tasks[i].subs) {
      tasks[i].subs[j].i = i
      tasks[i].subs[j].j = j
    }
  }

  applyHandles("tasks.handlebars", "tasks", { tasks }, after)
}