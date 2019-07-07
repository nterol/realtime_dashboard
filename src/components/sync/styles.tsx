import styled from "styled-components";
import { lighten } from "polished";

const getColor = (status: string) => {
  if (status === "off") return "red";
  else if (status === "on") return "green";
  else return "blue";
};

export const SyncContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-radius: 30px;
  color: white;
  background: ${({ status, show }: { status: string; show: boolean }): string =>
    show ? lighten(0.2, getColor(status)) : "transparent"};
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusText = styled.div`
  color: white;
  font-size: 14px;
`;

export const NetWorkPastille = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background: ${(props: { status: string }) => getColor(props.status)};
  margin-right: 16px;
`;

export const ReconnectButton = styled.button`
  border-style: none;
  color: white;
  border: 1px solid red;
  background: transparent;
  border-radius: 20px;
`;
