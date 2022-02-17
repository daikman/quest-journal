function newQuest() {
  adventures.quests[selectedAdventure].push(defaultQuest())
  makeSelection(adventures.quests[selectedAdventure].length-1)
  populate(adventures.quests[selectedAdventure])
  focusNewElement(adventures.quests[selectedAdventure], 'input')
}

function removeQuest(ind) {
  adventures.quests[selectedAdventure].splice(ind, 1);
  populate(adventures.quests[selectedAdventure])
}

function removeSelectedQuest() {
  let quests = adventures.quests[selectedAdventure]
  let selections = quests.map(d => d.selected)
  let ind = selections.indexOf(true)
  quests.splice(ind, 1);
  populate(quests)
}

function renameSelectedQuest() {
  let quests = adventures.quests[selectedAdventure]
  let selections = quests.map(d => d.selected)
  let quest = quests[selections.indexOf(true)]

  let name = prompt("Rename: " + quest.title, "Enter new name here...");

  if (name != null) {
    quest.title = name;
    populate(quests);
  }
}

function selectQuest(ind) {
  makeSelection(ind);
  populate(adventures.quests[selectedAdventure]);
}

function updateQuestTitle(ele) {
  let quests = adventures.quests[selectedAdventure]
  quests[ele.id[0]].title = ele.value;
}
