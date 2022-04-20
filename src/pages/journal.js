import * as React from "react";
import TaskList from "../components/TaskList"
import QuestList from "../components/QuestList"
import data from "../data.json"
import "../css/skeleton.css"
import "../css/normalize.css"

export default function Journal({epic, selectedQuest}) {

  const quests = data[epic].quests
  
  const names = quests.map(d => d.name)
  const tasks = quests[selectedQuest.value].tasks

  const bodyRow = createLists(names, selectedQuest, tasks)
  
  const headRow = <div className="row">
      <div className="four columns">
          <p>Quests</p>
      </div>
      <div className="four columns">
          <p>Tasks</p>
      </div>
  </div>

  return <>
    {headRow}
    {bodyRow}
  </>
  
}

function createLists(names, questState, tasks) {
    return <div className="row">
    <div className="four columns" id="questList">
      <QuestList quests={names} selectedQuest={questState}/>
    </div>
    <div className="four columns" id="taskList">
      <TaskList tasks={tasks} />
    </div>
  </div>
}
