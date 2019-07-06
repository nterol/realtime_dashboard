import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Element = styled.li`
  transition: all 200ms ease-in;
`;

const Timeline = () => (
  <Container>
    <Element />
  </Container>
);
