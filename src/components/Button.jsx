import React from "react";
import styled from 'styled-components';


const StyledButton = styled.button`

`

const Button = (props) => {

  return (
    <div>
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
