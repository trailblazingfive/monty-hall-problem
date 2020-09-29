import React, { useState } from "react";
import styled from 'styled-components';

const StyledOutput = styled.div`
  font-size: 2em;
  line-height: 1em;
`

const Output = (props) => {

  return (
    <StyledOutput>
      <p>Sample size: {props.simulation.sampleSize}</p>
      <p>Wins {props.simulation.wins}/{props.simulation.sampleSize}</p>
      <p>Probability of winning P={props.simulation.winRate}</p>
      <p>Strategy: {(props.simulation.keep) ? 'sticking to the initial decision' : 'changing the decision'}</p>
    </StyledOutput>
  );
};

export default Output;
