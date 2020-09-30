import React from "react";
import styled from 'styled-components';

import './css/General.css'


const StyledButton = styled.button`

`

const Button = (props) => {

  return (
    <div className="Center">
      <StyledButton
        className="Button"
        onClick={() => props.simulate(props.sampleSize,props.keep,3)}
      >
        Run simulation
      </StyledButton>
    </div>
  )
}

export default Button;
