import React, { useState, useEffect } from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import Output from "./components/Output"
import Frame from "./components/Frame"
import Backdrop from "./components/Backdrop";
import LoadingBackdrop from "./components/LoadingBackdrop";
import Message from "./components/Message";
import './components/css/General.css'



import { fetchMonty } from "./utils/fetchMonty"

const App = () => {

  const [simulation, setSimulation] = useState({})
  const [loading, setLoading] = useState(false)
  const [sampleSize, setSampleSize] = useState(0)

  const cbSampleSize = (sampleSize) => setSampleSize(sampleSize)

  const simulate = async (sampleSize, keep, numberOfDoors) => {
    setLoading(true)
    const res = await fetchMonty(sampleSize, keep, numberOfDoors)
    setSimulation(res)
  }

  // change no print when mounted
  useEffect(() => {
    setLoading(false)
    console.log(simulation)
  }, [simulation])

  return (
    <div className="App">
      <div className="Title">
        <a href="https://en.m.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noopener noreferrer">
          <h1 className="Title">Monty Hall problem</h1>
        </a>
      </div>

      <div className="Settings">
        <Frame title="Controls">
          <Input initial={0} cbSampleSize={cbSampleSize}/>
          <div className="StrategySelection">
            <ButtonToggle label="Keep" />
            <ButtonToggle label="Change" />
          </div>
          <h2 className="Center">{loading ? "Computing results" : ""}</h2>
          <Button label="Run simulation" simulate={simulate} sampleSize={sampleSize} />
        </Frame>
        <Frame title="Results">
          <Output simulation={simulation}></Output>
        </Frame>
      </div>
      <Backdrop/>
      <LoadingBackdrop />
    </div>
  );
}

export default App;
