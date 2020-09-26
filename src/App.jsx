import React, { useState } from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import Results from "./components/Results"


const App = () => {

  return (
    <div className="App">
      <h1>Monty Hall Problem</h1>
      <div className="Controls">
        <Input 
          initial="Simulation number"
        />
        <div className="StrategySelection">
          <ButtonToggle label="Keep" />
          <ButtonToggle label="Change" />
        </div>
        <Button label="Compute" />
      </div>
      <Results></Results>
    </div>
  );
}

export default App;
