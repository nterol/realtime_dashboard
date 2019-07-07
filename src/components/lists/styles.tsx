import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 16px;
  height: ${(props: { large: boolean }) => (props.large ? "600px" : "265px")};
  overflow: scroll;
  margin-bottom: 16px;
`;
