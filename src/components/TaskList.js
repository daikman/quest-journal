import * as React from "react";
import InOut from "../components/InOut"
import AddSub from "../components/AddSub"
import RemoveTask from "../components/RemoveTask"
import { AiOutlineCheckCircle as Incomplete, AiFillCheckCircle as Complete } from "react-icons/ai"

export default function ItemList({ epicState, questState }) {
  const tasks = epicState.value.quests[questState.value].tasks
  const list = tasks.map((d, i) => taskItem(d, i, epicState, questState))
  return list
}

function taskItem(task, i, eS, qS) {
  const input = <>
    <InOut text={task.name} />&nbsp;<AddSub />
    <RemoveTask taskIndex={i} subIndex={null} eS={eS} qS={qS}/>
  </>
  const subs = subTasks(task, i, eS, qS)
  return <ul>
    {renderTask(input)}
    <ul>{subs}</ul>
  </ul>
}

function subTasks(task, taskIndex, eS, qS) {
  if (task.subs.length == 0) return
  return task.subs.map(
    (d, i) => {
      const input = <>
        <InOut text={d.name} />
        <RemoveTask taskIndex={taskIndex} subIndex={i} eS={eS} qS={qS}/>
      </>
      return renderTask(input)
    }
  )
}

function renderTask(input, complete) {

  if (complete) return <div><span style={{cursor: "pointer"}}>
    <Complete />
  </span>{input}</div>

  return <div><span style={{cursor: "pointer"}}>
    <Incomplete />
  </span>&nbsp;{input}</div>

}