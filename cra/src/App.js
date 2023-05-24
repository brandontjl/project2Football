import React from "react"
import Header from "./Header.js"
import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedStats, setSelectedStats] = useState("")

  const handleClick = () => {
    setSelectedTeam();
    setSelectedStats();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        Learn React
      </header>
      <img src="https://i.imgur.com/QTgmDow.jpg" className="App-background" alt="logo" />

    </div>
  );
}

export default App;
