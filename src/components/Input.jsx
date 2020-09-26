import React, { useState } from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #000000;
  text-align: center;
  padding: 10px;
  margin: 5px;
`

const Input = (props) => {

  const [sampleSize, setSampleSize] = useState(props.initial);

  return (
    <div>
      <StyledInput
        type="text"
        placeholder={'Sample size'}
        onChange={event => setSampleSize(event.target.value)}
      >
      </StyledInput>
    </div>
  );
};

export default Input;
