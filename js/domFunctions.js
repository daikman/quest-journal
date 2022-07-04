function drawJournal() {

  // contrain SELECTED_INDEX
  if (SELECTED_INDEX < 0) SELECTED_INDEX = 0
  drawQuests()
  drawTasks()

  const binTemplate = Handlebars.templates.bin
  document.getElementById('bin').innerHTML = binTemplate({DELETED})

  document.getElementById('bin-button')
          .getElementsByTagName('sup')[0]
          .textContent = ''

  // update undo symbol
  if (JOURNAL_HISTORY.length)
    document.getElementById('bin-button')
            .getElementsByTagName('sup')[0]
            .textContent = "●"
    
}

function drawQuests() {
  const quests = JOURNAL[SELECTED_JOURNAL].quests
  const questTemplate = Handlebars.templates.quests

  // create quest list
  // add indexes
  for (let i in quests) {
    quests[i].i = i
    quests[i].selected = i == SELECTED_INDEX
  }
  document.getElementById('quests').innerHTML = questTemplate({quests})

}

function drawTasks() {
  const quests = JOURNAL[SELECTED_JOURNAL].quests
  const tasks = quests[SELECTED_INDEX]?.tasks
  const taskTemplate = Handlebars.templates.tasks

    // add indexes to tasks
    for (let i in tasks) {
      tasks[i].index = i
      for (let j in tasks[i].subs) {
        tasks[i].subs[j].i = i
        tasks[i].subs[j].j = j
      }
    }

    document.getElementById('tasks').innerHTML = taskTemplate({tasks})
}

function toggleBin() {
  const el = document.getElementById('bin')
  // if (el.style.width == '' | el.style.width == '0px') {
  //     el.style.width = '200px'
  // } else {
  //     el.style.width = '0px'
  // }

  if (el.style.right == '' | el.style.right == '-210px') {
    el.style.right = '0px'
} else {
    el.style.right = '-210px'
}
}

function toggleSubs(index) {
    console.log(index)
    const currentHeight = document.getElementsByClassName("subtasks")[+index].style.height

    if (currentHeight == "" | currentHeight == "0%") {
        document.getElementsByClassName("subtasks")[+index].style.height = "100%"
    } else {
        document.getElementsByClassName("subtasks")[+index].style.height = "0%"
    }

    document.getElementsByClassName("subtasks")[+index]
            .style.gridTemplateColumns = 'minmax(40%, 50%) 10px 10px'
         
}