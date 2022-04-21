import React, { useState } from 'react'
import { BsDash as Minus } from "react-icons/bs"

export default function RemoveTask({ taskIndex, subIndex, qS, eS }) {
    const [epic, editEpic] = useState(eS.value)
    return <span style={{cursor: "pointer"}} onClick={
        () => {
            // remove task
        }
    }><Minus /></span>
}