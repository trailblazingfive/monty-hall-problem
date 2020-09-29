import React, { useState } from "react";
import styled from 'styled-components';

const StyledResults = styled.p`
  font-size: 2em;
  line-height: 1em;
`

const Results = (props) => {

  return (
    <StyledResults>
      <p>Sample size: {props.simulation.sampleSize}</p>
      <p>Wins {props.simulation.wins}/{props.simulation.sampleSize}</p>
      <p>Probability of win P={props.simulation.winRate}</p>
      <p>{(props.simulation.keep) ? 'Sticking to the initial decision' : 'Changing the decision'}</p>

    </StyledResults>
  );
};

export default Results;
