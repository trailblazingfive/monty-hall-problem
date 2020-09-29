import React, { useState } from "react";
import styled from 'styled-components';
import './css/Button.css';


const StyledButton = styled.button`
  /* background-color: red; */
  background-color: ${props => props.toggle ? 'rgba(15, 248, 112, 0.8)' : 'rgba(255, 255, 255, 0.1)' };
  width: 120px;
  @media screen and (min-width:300px) and (max-width:800px) {
    width: 80px;
  }
`

const ButtonToggle = (props) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <StyledButton
        onClick={() => {setToggle(!toggle)}}
        toggle={toggle}
        className="Button"
      >
        {props.label}
      </StyledButton>
    </div>
  )
}

export default ButtonToggle;
