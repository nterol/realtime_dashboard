import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 4px #d6d1d1;
`;

export const SmartFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DangerCard = styled.div`
  background-color: #ff3860;
  padding: 16px;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Trivia = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
`;
