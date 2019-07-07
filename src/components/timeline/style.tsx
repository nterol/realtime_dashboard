import styled from "styled-components";

export const UL = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LI = styled.li`
  width: 100px;
  height: 50px;
  margin: 0px 4px;
  transition: all 200ms ease-in;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  background: ${(props: StyleProps) => (props.active ? "green" : "white")};
  z-index: 2;
  right: -15px;
  top: -15px;
  border: 1px solid ${(props: StyleProps) => (props.active ? "green" : "grey")};
  bottom: 10px;
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 20px;
  margin-left: 4px;
`;

type StyleProps = {
  active: boolean;
};

export const Step = styled.div`
  padding: 10px 0px;
  border-top: 2px solid
    ${(props: StyleProps) => (props.active ? "green" : "grey")};
  color: ${(props: StyleProps) => (props.active ? "green" : "grey")};
  width: 100px;
  padding: 10px 0px;
  text-align: left;
  font-size: 14px;
  transition: all 200ms ease-in;
`;
