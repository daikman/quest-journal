import * as React from "react";
import TaskList from "../components/TaskList"
import QuestList from "../components/QuestList"
import "../css/skeleton.css"
import "../css/normalize.css"

export default function Journal({epicState, questState}) {

  const quests = epicState.value.quests[questState.value]
  const tasks = quests.tasks

  const bodyRow = createLists(questState, epicState)
  
  const headRow = <div className="row">
      <div className="six columns">
          <p>Quests</p>
      </div>
      <div className="six columns">
          <p>Tasks</p>
      </div>
  </div>

  return <>
    {headRow}
    {bodyRow}
  </>
  
}

function createLists(questState, epicState) {

  return <div className="row">
    <div className="six columns" id="questList">
      <QuestList epicState={epicState} questState={questState}/>
    </div>
    <div className="six columns" id="taskList">
      <TaskList epicState={epicState} questState={questState} />
    </div>
  </div>
}
