import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  height: fill-available;
  width: 20%;
  background: black;
`;

export const Linklist = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  a {
    color: white;
    font-weight: bold;
    margin-bottom: 24px;
    text-decoration: none;
  }
`;
