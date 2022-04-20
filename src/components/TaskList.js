import * as React from "react";
import InOut from "../components/InOut"

export default function ItemList({ tasks }) {
  const list = tasks.map(d => taskItem(d))
  return list
}

function taskItem(task) {
  const name = <InOut text={task.name} />
  const subs = subTasks(task)
  return <ul>
    <li>{name}</li>
    <ul>{subs}</ul>
  </ul>
}

function subTasks(task) {
  if (task.subs.length == 0) return
  return task.subs.map(
    d => <li>
      
      <InOut text={d.name} />
      
    </li>
  )
}