import React, { useState, useEffect } from 'react';
import './App.css';
import './components/css/General.css'
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import Output from "./components/Output"
import Frame from "./components/Frame"
import Backdrop from "./components/Backdrop";
import LoadingBackdrop from "./components/LoadingBackdrop";

import { fetchMonty } from "./utils/fetchMonty"

const App = () => {

  const [simulation, setSimulation] = useState({})
  const [loading, setLoading] = useState(false)
  const [sampleSize, setSampleSize] = useState(0)
  const [keep, setKeep] = useState(true);
  const [fresh, setFresh] = useState(false);

  const cbSampleSize = (sampleSize) => setSampleSize(sampleSize)

  const simulate = async (sampleSize, keep, numberOfDoors) => {
    setLoading(true)
    const res = await fetchMonty(sampleSize, keep, numberOfDoors)
    setSimulation(res)
    setLoading(false)
    setFresh(true)
  }

  const cbSetKeep = (keep) => setKeep(keep);
  const cbSetFresh = (fresh) => setFresh(fresh);

  // change no print when mounted
  // useEffect(() => {
  //   setLoading(false)
  //   setFresh(true)
  // }, [simulation])

  return (
    <div className="App">
      <div className="Title">
        <a href="https://en.m.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noopener noreferrer">
          <h1 className="Title">Monty Hall problem</h1>
        </a>
      </div>

      <div className="Settings">
        <Frame title="Controls">
          <Input initial={0} cbSampleSize={cbSampleSize} />
          <ButtonToggle
            cbSetKeep={cbSetKeep}
            keep={keep}
            cbSetFresh={cbSetFresh}
          />
          <h2 className="Center">{loading ? "Computing results" : ""}</h2>
          <Button
            label="Run simulation"
            simulate={simulate}
            sampleSize={sampleSize}
            keep={keep}
            cbSetFresh={cbSetFresh}
          />
        </Frame>
        <Frame title="Results">
          <Output simulation={simulation} keep={keep} fresh={fresh}></Output>
        </Frame>
      </div>
      <Backdrop />
      <LoadingBackdrop />
    </div>
  );
}

export default App;
