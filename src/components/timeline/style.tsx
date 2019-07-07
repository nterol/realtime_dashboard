import styled, { css } from "styled-components";
import { darken } from "polished";

export const UL = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LI = styled.li`
  width: 80px;
  height: 50px;
  margin: 0px 4px;
  transition: all 200ms ease-in;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  background: white;
  z-index: 2;
  right: -15px;
  top: -15px;
  bottom: 10px;
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 20px;
  margin-left: 4px;
  font-size: 16px;
`;

type StyleProps = {
  active: boolean;
};

export const Step = styled.div`
  padding: 10px 0px;
  border-top: 3px solid
    ${(props: StyleProps) => (props.active ? "#23d160" : "#e0d7d7")};
    ${props =>
      props.active &&
      css`
        font-weight: bold;
      `}
  color: ${(props: StyleProps) =>
    props.active ? darken(0.1, "#23d160") : "#9c9595"};
  width: 80px;
  padding: 10px 0px;
  text-align: left;
  font-size: 12px;
  transition: all 200ms ease-in;
`;
