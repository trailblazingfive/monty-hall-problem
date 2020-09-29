import React, { useState } from "react";
import styled from 'styled-components';

const StyledMessage = styled.div`
  font-size: 2em;
  line-height: 1em;
`

const Message = (props) => {

  const [display, setDisplay] = useState(false)

  

  return (
    <StyledMessage>
      {props.message}
    </StyledMessage>
  );
};

export default Message;
