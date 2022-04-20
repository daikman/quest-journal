import React from "react";

// Import the Home page component
import Journal from "../pages/journal";
import Login from "../pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import and apply CSS stylesheet
// import "./styles/styles.css";

export default function App() {

  const [epic, selectEpic] = React.useState("Making a house")
  const [selectedQuest, selectQuest] = React.useState(0)

  return <div style={{maxWidth: "800px", margin: "auto", marginTop: "5%"}}>
    <Router>
      <Routes>
        <Route path="/" element={<Journal epic={epic} selectedQuest={{value: selectedQuest, set: selectQuest}} />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>
    </Router>
    </div>
}

