import React, { useState } from "react";
import styled from 'styled-components';
import './css/General.css'

const StyledInput = styled.input`
  border: 1px solid #000000;
  text-align: center;
  padding: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255,0.1);
  width: 150px;
  @media screen and (min-width:300px) and (max-width:800px) {
    width: 100px;
  }
`

const Input = (props) => {

  const [sampleSize, setSampleSize] = useState(props.initial);

  return (
    <div className="Center">
      <StyledInput
        type="text"
        placeholder={'Sample size'}
        onChange={event => {
          setSampleSize(event.target.value)
          props.cbSampleSize(event.target.value)
        }}
      >
      </StyledInput>
    </div>
  );
};

export default Input;
