function addTask() {
  let quests = adventures.quests[selectedAdventure]
  let quest = quests[quests.map(d => d.selected).indexOf(true)];
  quest.tasks.push(defaultTask());
  populate(quests);
  focusNewElement(quest.tasks, 'listItem')
}
