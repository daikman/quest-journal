function refresh(adventure, selected) {
  document.getElementById("adventure-name").value = adventures.titles[selected]
  populate(adventures.quests[selected])
}