function applyHandles(filename, domId, data) {

  fetch("../hb-templates/" + filename)
    .then(res => res.text())
    .then(text => {
      const template = Handlebars.compile(text)
      document.getElementById(domId).innerHTML = template(data)
    })
  
}

function drawJournal() {

  // contrain SELECTED_INDEX
  if (SELECTED_INDEX < 0) SELECTED_INDEX = 0
  
  drawQuests()
  drawTasks()
  
}

function drawQuests() {
  const quests = JOURNAL[SELECTED_JOURNAL].quests

  // create quest list
  // add indexes
  for (let i in quests) {
    quests[i].i = i
    quests[i].selected = i == SELECTED_INDEX
  }

  applyHandles("quests.handlebars", "quests", { quests })

}

function drawTasks() {
  const quests = JOURNAL[SELECTED_JOURNAL].quests
  const tasks = quests[SELECTED_INDEX]?.tasks
  // const taskTemplate = Handlebars.templates.tasks

    // add indexes to tasks
    for (let i in tasks) {
      tasks[i].index = i
      for (let j in tasks[i].subs) {
        tasks[i].subs[j].i = i
        tasks[i].subs[j].j = j
      }
    }

    // document.getElementById('tasks').innerHTML = taskTemplate({tasks})
    applyHandles("tasks.handlebars", "tasks", { tasks })
}