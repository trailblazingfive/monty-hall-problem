import React, { useState, useEffect } from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import Results from "./components/Results"

import { fetchMonty } from "./utils/fetchMonty"

const App = () => {

  const [simulation, setSimulation] = useState({})
  const [loading, setLoading] = useState(false)



  const simulate = async (sampleSize, keep, numberOfDoors) => {
    setLoading(true)
    const res = await fetchMonty(sampleSize, keep, numberOfDoors)
    setSimulation(res)
    setLoading(false)
  }

  useEffect(() => {
    console.log(simulation)
  }, [simulation])

  return (
    <div className="App">
      <h1 className="Title">Monty Hall Problem</h1>
      <div className="Settings">
        <div className="Controls">
          <Input
            initial={0}
          />
          <div className="StrategySelection">
            <ButtonToggle label="Keep" />
            <ButtonToggle label="Change" />
          </div>
          <h2>{loading ? "Computing results" : ""}</h2>
          <Button label="Compute" simulate={simulate} sampleSize={1000} />
        </div>
        <Results></Results>
      </div>
    </div>
  );
}

export default App;
