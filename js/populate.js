function populate() {
  let quests = adventures.quests[selectedAdventure]
  $("#quest-list").empty()
  $("#task-list").empty()
  $("#quest-drop select").empty()
  // get elements
  let questList = document.getElementById("quest-list").appendChild(
    document.createElement("UL")
  )
  let taskList = document.getElementById("task-list")

  // select drop for smaller screens
  let drop = document.getElementById("quest-drop").getElementsByTagName("select")[0]

  // if no quest selected, makeSelection(quests.length-1)
  let selections = quests.map(d => d.selected)
  if (selections.indexOf(true) == -1) {
    quests[quests.length - 1].selected = true;
    makeSelection(quests.length-1);
  }

  for (let i = 0; i < quests.length; i++) {
    let quest = quests[i]

    // create elements for titles of each quest
    drawQuest(quest, i, questList)

    // update select input for small screens
    fillQuestSelect(quest, i, drop)

    // create elements for each task of selected quest
    drawTasks(quest, taskList)

  }

}

function fillQuestSelect(quest, i, ele) {
  let option = document.createElement("option")
  option.textContent = quest.title
  option.id = i + "selectQuest"
  option.onclick = "selectQuest(this.id[0])"
  ele.appendChild(option)

  let quests = adventures.quests[selectedAdventure]
  let selections = adventures.quests[selectedAdventure].map(d => d.selected)
  let selected = selections.indexOf(true)
  if (i == selected) {
    ele.value = option.textContent
  }
}

function makeSelection(ind) {

  // set all quests.selected to false
  for (quest of adventures.quests[selectedAdventure]) {
    quest.selected = false
  }

  // set selected quest.selected to true
  adventures.quests[selectedAdventure][ind].selected = true

}

function createRow() {
  let r = document.createElement("div")
  r.setAttribute("class", "row")

  return(r)
}

function drawQuest(quest, i, questList) {
    // create row for big screens
    let row = createRow()
    questList.appendChild(row)

    // create button
    let butt = document.createElement("label")
    butt.setAttribute("class", "quest-select")

    butt.setAttribute("id", i + "button")
    butt.setAttribute("onclick", "selectQuest(this.id[0]);")
    butt.style.cursor = "pointer"
    if (quest.complete) {
      butt.style.color = "lightgrey";
    } else {
      butt.style.color = "white";
    }

    if (quest.selected) {
      butt.innerHTML = "&#9733;"
    } else {
      butt.innerHTML = "&#9734;"
    }

    row.appendChild(butt)

    // create quest text
    let node = document.createElement("input")
    node.setAttribute("type", "text")
    node.setAttribute("value", quest.title)
    node.setAttribute("id", i + "input")
    node.setAttribute("onchange", "updateQuestTitle(this);")
    node.setAttribute("autocomplete", false)
    //node.style.width = "100%"


    if (quest.selected) {
      node.style.fontWeight = "bold";
    } else {
      node.style.fontWeight = "normal";
    }

    if (quest.complete) {
      node.style.color = "lightgrey";
    } else {
      node.style.color = "white";
    }

    row.appendChild(node)

    let removeQuest = document.createElement("label")
    removeQuest.setAttribute("id", i + "removeQuest")
    removeQuest.setAttribute("onclick", "removeQuest(this.id[0])")
    removeQuest.textContent = "-"

    row.appendChild(removeQuest)


}

function drawTasks(quest, taskList) {
  if (quest.selected) {
      for (let i in quest.tasks) {
        let task = quest.tasks[i]

        // make a row for the task
        let rowTask = createRow()

        // make a bullet
        let bullet = document.createElement("label")
        bullet.setAttribute("id", i + "bullet")
        if (quest.tasks[i].complete[0]) {
          bullet.innerHTML = "&#9746;"
        } else {
          bullet.innerHTML = "&#9744;"
        }
        bullet.setAttribute("onclick", "updateTaskComplete(this.id)")

        // make the input node
        let node = document.createElement("input")
        node.setAttribute("type", "text")
        node.setAttribute("id", i + "listItem")
        node.setAttribute("onchange", "updateTaskName(this)")
        node.setAttribute("autocomplete", false)
        node.value = task.name[0]
        node.style.width = "75%"

        // make add subtask button
        let addSub = document.createElement("label")
        addSub.setAttribute("id", i + "addSub")
        addSub.setAttribute("onclick", "addSubTask(this.id);")
        addSub.textContent = "+"

        let removeTask = document.createElement("label")
        removeTask.setAttribute("id", i + "removeTask")
        removeTask.setAttribute("onclick", "removeTask(this.id);")
        removeTask.textContent = "-"

        // append elements to row
        rowTask.appendChild(bullet)
        rowTask.appendChild(node)
        rowTask.appendChild(addSub)
        rowTask.appendChild(removeTask)

        if (task.name.length > 1) {

          for (let j in task.name) {
            let sub = task.name[j]
            if (sub != task.name[0]) {
              // make the row
              row = document.createElement("div")
              //row.setAttribute("class", "row")

              // make some space
              let space = document.createElement("label")
              space.innerHTML = "&nbsp;&nbsp;&nbsp;"

              // make a bullet
              bullet = document.createElement("label")
              //let bulletIndex = +i + +j
              bullet.setAttribute("id", i + j + "bullet")
              bullet.setAttribute("onclick", "updateTaskComplete(this.id);")
              // to get task on list, first letter and second letter as index
              if (task.complete[j]) {
                bullet.innerHTML = "&#9746;"
              } else {
                bullet.innerHTML = "&#9744;"
              }

              bullet.style.marginLeft = "32px"


              let li = document.createElement("input")
              li.setAttribute("type", "text")
              li.setAttribute("id", i + j + "listSub")
              li.setAttribute("onchange", "updateTaskName(this)")
              li.value = sub
              li.style.width = "224px"

              let removeSub = document.createElement("label")
              removeSub.setAttribute("id", i + j + "removeTask")
              removeSub.setAttribute("onclick", "removeTask(this.id);populate(adventures.quests[selectedAdventure])")
              removeSub.textContent = "-"

              row.appendChild(bullet)
              row.appendChild(li)
              row.appendChild(removeSub)

              rowTask.appendChild(row);
            }
          }

        }

        taskList.appendChild(rowTask)

      }

      // reward message
      let rewardP = document.getElementById("rewardP")
      rewardP.textContent = "Reward:"
      rewardP.style.width = "56px"
      rewardP.style.fontWeight = "normal"
      rewardP.style.textDecoration = "underline"

      // reward content
      let reward = document.getElementById("rewardInput")
      reward.setAttribute("type", "text")
      reward.setAttribute("value", quest.reward)
      reward.setAttribute("autocomplete", "off")
      reward.setAttribute("onchange", "let quests = adventures.quests[selectedAdventure];let selected = quests.map(d => d.selected).indexOf(true);quests[selected].reward = this.value")

      reward.style.width = "80%"

      row = document.getElementById("reward")
      row.setAttribute("class", "row")

      row.appendChild(rewardP)
      row.appendChild(reward)
      
    }
}

function focusNewElement(elements, append) {
  let i = elements.length - 1

  let id = i + append

  document.getElementById(id).focus()
  document.getElementById(id).select()

}
