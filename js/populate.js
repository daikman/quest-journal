function populate() {
  let quests = adventures.quests[selectedAdventure]

  // clear elements
  $("#quest-list").empty()
  $("#task-list").empty()
  $("#quest-drop select").empty()

  // define elements
  let questList = $("#quest-list")[0].appendChild(
    document.createElement("UL")
  )
  let taskList = $("#task-list")[0]
  let drop = $("#quest-drop select")[0]

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
    if (quest.selected) {
      drawTasks(quest, taskList)
    }

  }

}

function fillQuestSelect(quest, i, ele) {
  let option = createEle("option",
    {
      textContent: quest.title,
      id: i + "selectQuest",
      onclick: function() {selectQuest(this.id[0])},
      class: "quest-option"
    },
    {}
  )
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
  for (let quest of adventures.quests[selectedAdventure]) {
    quest.selected = false
  }
  // set selected quest.selected to true
  adventures.quests[selectedAdventure][ind].selected = true

}

function createRow(children) {
  let r = createEle("div", {class: "row"}, {})
  for (let i in children) {
    r.appendChild(children[i])
  }
  return(r)
}

function drawQuest(quest, i, questList) {

    // create button
    let butt = createEle("label",
      {
        class: "quest-select",
        id: i + "button",
        onclick: function() {selectQuest(this.id[0])},
        innerHTML: quest.selected ? "&#9733;" : "&#9734;"
      },
      {
        cursor: "pointer",
        color: quest.complete ? "lightgrey" : "white"
      }
    )

    // create quest text
    let label = createEle("input",
      {
        type: "text",
        value: quest.title,
        id: i + "input",
        onchange: function() {updateQuestTitle(this)},
        autocomplete: false,
        class: "quest-input"
      },
      {
        fontWeight: quest.selected ? "bold" : "normal",
        color: quest.complete ? "lightgrey" : "white"
      }
    )

    let removeQ = createEle("label",
      {
        id: i + "removeQuest",
        onclick: function() {removeQuest(this.id[0])},
        textContent: "-",
        class: "quest-remove"
      },
      {}
    )

    let row = createRow([butt, label, removeQ])
    questList.appendChild(row)

}

function drawTasks(quest, taskList) {

    for (let i in quest.tasks) {
      let task = quest.tasks[i]

      // make a bullet
      let bullet = createEle("label",
        {
          id: i + "bullet",
          innerHTML: quest.tasks[i].complete[0] ? "&#9746;" : "&#9744;",
          onclick: function() {updateTaskComplete(this.id)},
          class: "task-complete"
        },
        {}
      )

      // make the input node
      let input = createEle("input",
        {
          type: "text",
          id: i + "listItem",
          onchange: function() {updateTaskName(this)},
          autocomplete: false,
          value: task.name[0],
          class: "task-input"
        },
        {
          width: "75%"
        }
      )

      // make add subtask button
      let addSub = createEle("label",
        {
          id: i + "addSub",
          onclick: function() {addSubTask(this.id)},
          textContent: "+",
          class: "add-sub-task"
        },
        {}
      )

      let removeT = createEle("label",
        {
          id: i + "removeTask",
          onclick: function() {removeTask(this.id)},
          textContent: "-",
          class: "remove-task"
        },
        {}
      )

      // append elements to row
      // make a row for the task
      let rowTask = createRow([bullet, input, addSub, removeT])

      if (task.name.length > 1) {

        for (let j in task.name) {
          let sub = task.name[j]
          if (sub != task.name[0]) {

            // make some space
            let space = createEle("label",
              {innerHTML: "&nbsp;&nbsp;&nbsp;", class: "sub-space"},
              {}
            )

            // make a bullet
            let subBullet = createEle("label",
              {
                id: i + j + "bullet",
                onclick: function() {updateTaskComplete(this.id)},
                innerHTML: task.complete[j] ? "&#9746;" : "&#9744;",
                class: "sub-bullet"
              },
              {
                marginLeft: "32px"
              }
            )


            let li = createEle("input",
              {
                type: "text",
                id: i + j + "listSub",
                onchange: function() {updateTaskName(this)},
                value: sub,
                class: "sub-input"
              },
              {
                width: "224px"
              }
            )

            let removeSub = createEle("label",
              {
                id: i + j + "removeTask",
                onclick: function() {
                  removeTask(this.id);
                  populate(adventures.quests[selectedAdventure])
                },
                textContent: "-",
                class: "remove-sub"
              },
              {}
            )

            let subRow = createRow([subBullet, li, removeSub])
            rowTask.appendChild(subRow);
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
    reward.setAttribute("onchange", "updateReward(this.value)")

    reward.style.width = "80%"

    row = document.getElementById("reward")
    row.setAttribute("class", "row")

    row.appendChild(rewardP)
    row.appendChild(reward)


}

function focusNewElement(elements, append) {
  let i = elements.length - 1

  let id = i + append

  document.getElementById(id).focus()
  document.getElementById(id).select()

}

function createEle(tag, attr, style) {

  let ele = document.createElement(tag)

  let attrNames = Object.keys(attr)
  let attrValues = Object.values(attr)
  for (let i in attrNames) {
    let name = attrNames[i]
    let value = attrValues[i]
    ele[name] = value
  }

  let styleNames = Object.keys(style)
  let styleValues = Object.values(style)
  for (let i in styleNames) {
    let name = styleNames[i]
    let value = styleValues[i]
    ele.style[name] = value
  }

  return(ele)

}
