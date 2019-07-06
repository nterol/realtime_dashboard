import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import serverStatus from "../../redux/types/serverStatus";

import { StateType } from "../types";

const getColor = (status: string) => {
  if (status === "off") return "red";
  else if (status === "on") return "green";
  else return "yellow";
};

const SyncContainer = styled.div`
  border-radius: 10px;
  color: white;
  background: palegoldenrod;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const NetWorkPastille = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background: ${(props: { status: string }) => getColor(props.status)};
`;

function Sync() {
  const dispatch = useDispatch();
  const [retries, setRetries] = useState(3);

  const status = useSelector((state: StateType) => state.server.status);
  useEffect(() => {
    if (status === undefined) {
      dispatch({ type: "START" });
    }
    if (status === "off" && retries > 0)
      setTimeout(() => {
        setRetries(retries - 1);
        dispatch({ type: "START" });
      }, 4000);
  }, [dispatch, retries, status]);

  return (
    <SyncContainer>
      <NetWorkPastille status={status} />
      <span>{status}</span>
    </SyncContainer>
  );
}

export default Sync;
