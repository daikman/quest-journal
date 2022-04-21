import * as React from "react";
import InOut from "../components/InOut"
import { AiOutlineStar as NotSelected, AiFillStar as Selected } from 'react-icons/ai'

export default function QuestList({ epicState, questState }) {
  const quests = epicState.value.quests
  const list = quests.map((d, i) => QuestItem(d.name, i, questState, epicState))
  return <>{list}</>
}

function QuestItem(quest, i, questState, epicState) {
  return <div>
    <span onClick={() => questState.set(i)}>
      {QuestTick(i == questState.value)}
    </span>
    &nbsp;<InOut text={quest} />
  </div>
}

function QuestTick(selected) {
  if (selected) return <Selected />
  return <NotSelected />
}