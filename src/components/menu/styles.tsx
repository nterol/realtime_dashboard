import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 15%;
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fbf8f8;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const Linklist = styled.div`
  margin: 16px 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  a {
    color: #111;
    font-weight: bold;
    margin-bottom: 24px;
    text-decoration: none;
  }
`;
