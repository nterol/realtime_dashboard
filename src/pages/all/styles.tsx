import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 130px;
  padding: 8px;
  border-style: none;
  border-bottom: 1px solid;
  background: transparent;
  margin-right: 16px;
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border-radius: 4px;
  background: #fff;

  :focus {
    outline: none;
    border: 1px solid #23d160;
  }
`;
