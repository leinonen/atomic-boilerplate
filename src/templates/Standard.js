import React from "react";
import styled from "styled-components";
import { Navigation } from "../organisms/Navigation";

export function Standard({ children }) {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  & button {
    display: inline-block;
  }
`;
