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
}// p5 canvas that clouds over when loading and clears up when loaded
// starts clouded and goes clear on page start

let cnv;
let cloudness = 0;
let clouds = [];
let change = 1;
let max = 32;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.parent('foreground')
    pixelDensity(0.01)
    for (let i = 0; i < max; i++) {
        const r = random(300, 500)
        clouds.push({
            x: random(0 - r, width + r),
            y: random(0 - r, width + r),
            tx: random(width),
            ty: random(height),
            r: r,
            s: 0.01
        })
    }
    document.getElementById('foreground').style.display = "none"
}

function draw() {
    if (document.getElementById('foreground').style.display == "none") return

    clear()
    background(255, 10)
    
    drawClouds()
    
    cloudness += change
    if (cloudness > max) cloudness = max
    if (cloudness == 0) {
        document.getElementById('foreground').style.display = "none"
        return
    }
}

function drawClouds() {
    const alpha = 100*(cloudness/max)
    fill(100, 100, 100, alpha)
    noStroke()
    for (let i = 0; i < cloudness; i++) {
        const cloud = clouds[i]
        cloud.x = lerp(cloud.x, cloud.tx, cloud.s)
        cloud.y = lerp(cloud.y, cloud.ty, cloud.s)
        if (abs(cloud.x - cloud.tx) < 50) {
            cloud.tx = random(0 - cloud.r, width + cloud.r)
            cloud.ty = random(0 - cloud.r, height + cloud.r)
        }
        circle(cloud.x, cloud.y, cloud.r)
    } 
}

function cloudUp() {
    change = 1
    document.getElementById('foreground').style.display = "block"
}

function clearUp() {
    change = -1
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}// DOM MANIPULATION AND SCRAPING
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

function saveJournal(logout) {
  
    let url = 'https://quest-journal-api.glitch.me/save/'
    let bod = {}
    bod.journals = JOURNAL
  
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
    
    cloudUp()
    fetch(url, config)
      .then(response => {
          return response.json();
      })
      .then(data => {
          clearUp()
          if (logout) location.reload()
      })
  
  }function auth() {
    const method = document.getElementById('login-submit').textContent
    if (method == "Login") login()
    if (method == "Register") register()
}

async function login() {
    const username = document.getElementById("login-user").value
    const password = document.getElementById("login-password").value
    
    // check name and password have been entered
    if (!username | !password) {
        alert("Username or password missing")
        return
    }

    // attempt login
    const url = "https://quest-journal-api.glitch.me/login/"

    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    // loading blur
    cloudUp()

    // attempt login
    const response = await fetch(url, config)
      .then(res => res.json())
      .then(data => {
        clearUp()
        return data
    })
    
    if (response.success) {
        success(response.journals)
        return
    }

    alert(response.message)

}

async function register() {
    const username = document.getElementById("login-user").value
    const password1 = document.getElementById("login-password").value
    const password2 = document.getElementById("login-confirm").value

    // check all required have been entered
    if (!username | !password1 | !password2) {
        alert("Username or password(s) missing")
        return
    }

    // compare passwords
    if (password1 != password2) {
        alert("Passwords do not match!")
        return
    }

    const url = "https://quest-journal-api.glitch.me/register/"

    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password1
        })
    }

    // attempt register
    cloudUp()
    const response = await fetch(url, config)
      .then(res => res.json())
      .then(data => {
        clearUp()
        return data
      })
    
    if (response.success) {
        success(response.journals)
        return
    }
    

    alert(response.message)
}

function success(journals) {
    // hide login modal
    document.getElementById("login-modal").style.display = "none"

    // draw journals
    JOURNAL = journals
    drawJournal()
}let JOURNAL = []
let JOURNAL_HISTORY = []
let SELECTED_INDEX = 0
let SELECTED_JOURNAL = 0
 
// array of objects that were deleted, along with where they were deleted from (i.e., parent object)
let DELETED = []

applyHandles("loginModal.handlebars", "login-modal", null)

document.getElementById("overlay").style.display = "none"
