import React, { useState } from "react";
import styled from 'styled-components';

const StyledFrame = styled.div`
  border: 1px solid #000000;
  padding: 10px;
  margin: 30px;
  vertical-align: top;
`
const FrameTitle = styled.p`
  position: relative;
  display: block;
  top: -35px;
  left: -15px;
  text-align: left;
  user-select: none;
  padding: 0px;
  margin-bottom: -25px;
`

const Frame = (props) => {

  return (
    <StyledFrame>
      <FrameTitle>{props.title}</FrameTitle>
      {props.children}
    </StyledFrame>
  );
};

export default Frame;
