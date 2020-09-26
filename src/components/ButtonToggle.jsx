import React, { useState } from "react";
import styled from 'styled-components';
import './css/Button.css';


const StyledButton = styled.button`
  /* background-color: red; */
  background-color: ${props => props.toggle ? 'lime' : '#ffffff' };
  width: 120px;
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
