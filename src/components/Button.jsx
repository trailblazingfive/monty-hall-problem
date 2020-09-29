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
        onClick={() => props.simulate(props.sampleSize,true,3)}
      >
        {props.label}
      </StyledButton>
    </div>
  )
}

export default Button;
