adventures = {
  titles: ["The Grand Journey for Tea"],
  quests: [
    [
	    {
	    	title: "Tea's company",
	    	tasks: [
	    			{name: ["Put on kettle"], complete: [false]},
	    			{name: ["Get tea bag"], complete: [false]},
	    			{name: ["Make tea", "Pour water", "Put tea bag in water"], complete: [false, false, false]}
	    	],
	    	reward: "a delicious cup of tea (rare item)",
	    	selected: true,
	    	complete: false
	    }
    ]
  ]
}

quests = [
	{
		title: "Tea's company",
		tasks: [
				{name: ["Put on kettle"], complete: [false]},
				{name: ["Get tea bag"], complete: [false]},
				{name: ["Make tea", "Pour water", "Put tea bag in water"], complete: [false, false, false]}
		],
		reward: "a delicious cup of tea (rare item)",
		selected: true,
		complete: false
	}
]

randomQuests = [
  "House of thieves", "Soul searching", "Go fish", "Dance of the sword",
  "Lost mountains", "Telling truths", "The rich get richer",
  "Broken commandments", "The witch's seminar", "Midnight sun",
  "Falling through time", "A final path", "Discreet delivery",
  "Storm the castle", "A phantom fighter", "Paint brush with death",
  "Tensions rising"
]

randomTasks = [
  "Go to dungeon", "Talk to innkeeper", "Follow the thief", "Steal key",
  "Defeat dragon", "Find ancient rune", "Upgrade equipment", "Improve stealth skill",
  "Brew health potion", "Locate entrance", "Get ingredients", "Bake pie",
  "Poison the wine", "Have a snack", "Repair your shoes", "Outrun the guards",
  "Talk to Amy"
]

function defaultQuest() {

  let i = Math.floor(Math.random()*randomQuests.length)

  return(
    {
		  title: randomQuests[i],
		  tasks: [
		  		defaultTask(),
		  		defaultTask(),
		  		defaultTask()
		  ],
		  reward: "800 XP",
		  selected: false,
		  complete: false
    }
  )

}

function defaultTask() {

  let i = Math.floor(Math.random()*randomTasks.length)

  return(
    {
      // make from random list of quest sounding things
      name: [randomTasks[i]], complete: [false]
    }
  )
}

function updateTaskName(element) {
  let selected = quests.map(d => d.selected).indexOf(true)

  let i = element.id[0]
  let j = element.id[1]

  if (j == "l") {
    quests[selected].tasks[i].name[0] = [element.value]
  } else {
    quests[selected].tasks[i].name[j] = element.value
  }

}

function updateTaskComplete(id) {
  let quests = adventures.quests[selectedAdventure]
  let quest = quests[quests.map(d => d.selected).indexOf(true)]

  let i = id[0]
  let j = id[1]

  if (j == "b") {
    quest.tasks[i].complete[0] = !quest.tasks[i].complete[0]
  } else {
    quest.tasks[i].complete[j] = !quest.tasks[i].complete[j]
  }

  populate(quests);

}

function removeTask(id) {
  let quests = adventures.quests[selectedAdventure]
  let quest = quests[quests.map(d => d.selected).indexOf(true)]

  let i = id[0]
  let j = id[1]

  if (j == "r") {
    quest.tasks.splice(i, 1)
  } else {
    quest.tasks[i].name.splice(j, 1)
    quest.tasks[i].complete.splice(j, 1)
  }

  populate(quests)

}

function addSubTask(id) {
  let quests = adventures.quests[selectedAdventure];
  let quest = quests[quests.map(d => d.selected).indexOf(true)]

  quest.tasks[id[0]].name.push(defaultTask().name[0])
  quest.tasks[id[0]].complete.push(defaultTask().complete[0])

  populate(quests)
}

function saveQuests() {

  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(adventures, null, 2)], {
    type: "text/plain"
  }));
  a.setAttribute("download", "quests.txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

}

function load(file) {
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8")
  reader.onload = function (evt) {
    adventures = JSON.parse(evt.target.result)
    selectedAdventure = 0
    populate(adventures.quests[selectedAdventure])
  }
  reader.onerror = function (evt) {
      alert("Error reading file")
  }

}
