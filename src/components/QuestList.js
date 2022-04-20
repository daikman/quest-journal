import * as React from "react";
import InOut from "../components/InOut"
import { AiOutlineStar as NotSelected, AiFillStar as Selected } from 'react-icons/ai'

export default function QuestList({ quests, selectedQuest }) {
  const list = quests.map((d, i) => QuestItem(d, i, selectedQuest.value, selectedQuest.set))
  return <>{list}</>
}

function QuestItem(quest, i, selected, handleClick) {
  return <div>
    <span onClick={() => handleClick(i)}>{QuestTick(i == selected)}</span>
    <InOut text={quest} />
  </div>
}

function QuestTick(selected) {
  if (selected) return <Selected />
  return <NotSelected />
}