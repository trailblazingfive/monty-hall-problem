import React, { useState } from "react";
import styled from 'styled-components';

const StyledLink = styled.a`
  position: fixed;
  bottom: 0.5vw;
  right: 0.5vw;
  font-size: 0.8em;
  text-align: right;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(8, 134, 165, 0.8);
  }
`

const Credit = () => {

  return (
      <StyledLink
        href="https://github.com/trailblazingfive"
        target="_blank"
        rel="noopener noreferrer"
      >
        by trailblazingfive 2020
    </StyledLink>
  );
};

export default Credit;