import React, { useState } from "react";
import styled from 'styled-components';


const StyledButton = styled.button`

`

const Button = (props) => {

  return (
    <div>
      <StyledButton
        className="Button"
      >
        {props.label}
      </StyledButton>
    </div>
  )
}

export default Button;
