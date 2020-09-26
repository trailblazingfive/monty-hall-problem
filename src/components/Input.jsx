import React, { useState } from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #000000;
  text-align: center;
  padding: 10px;
`

const Input = (props) => {

  const [simNumber, setSimNumber] = useState(props.initial);

  return (
    <div>
      <StyledInput
        type="text"
        value={simNumber}
        onChange={event => setSimNumber(event.target.value)}
      >
      </StyledInput>
    </div>
  );
};

export default Input;
