import React, { useState } from "react";
import styled from 'styled-components';

const StyledOutput = styled.div`
  font-size: 2em;
  line-height: 1em;
  display: ${props => props.fresh ? 'block' : 'none'};
`

const Output = (props) => {
  return (
    <StyledOutput fresh={props.fresh}>
      <p>Sample size {props.simulation.sampleSize}</p>
      <p>Wins {props.simulation.wins}/{props.simulation.sampleSize}</p>
      <p>Probability of winning P={props.simulation.winRate}</p>
      <p>Strategy {(props.keep) ? 'sticking to the initial decision (KEEP)' : 'changing the decision (CHANGE)'}</p>
    </StyledOutput>
  );
};

export default Output;
