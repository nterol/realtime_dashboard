import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";

import serverStatus from "../../redux/types/serverStatus";

import {
  SyncContainer,
  NetWorkPastille,
  StatusText,
  ReconnectButton
} from "./styles";

import { StateType } from "../types";

const getText = (status: string) => {
  if (status === "on") return "Connecté";
  else if (status === "off") return "Serveur injoignable";
  else if (status === "reconnect") return "Reconnexion...";
};

function Sync() {
  const dispatch = useDispatch();
  const [retries, setRetries] = useState(3);
  const [showStatus, setShowStatus] = useState(false);

  const textProps = useSpring({
    opacity: showStatus ? 1 : 0,
    transform: showStatus ? "translateX(0%)" : "translateX(-100%)"
  });

  const handleReconnect = () => {
    dispatch({ type: serverStatus.launch });
    setRetries(3);
  };

  const status = useSelector((state: StateType) => state.server.status);
  useEffect(() => {
    if (status === undefined) {
      dispatch({ type: serverStatus.launch });
    }
    if (status === "off" && retries > 0)
      setTimeout(() => {
        dispatch({ type: serverStatus.launch });
        setRetries(retries - 1);
      }, 4000);
  }, [dispatch, retries, status]);

  return (
    <SyncContainer
      onMouseEnter={() => setShowStatus(true)}
      onMouseLeave={() => setShowStatus(false)}
      show={showStatus}
      status={status}
    >
      <NetWorkPastille status={status} />
      <animated.div style={textProps}>
        <StatusText>
          {retries > 0 ? getText(status) : undefined}
          {retries === 0 && status === "off" ? (
            <ReconnectButton onClick={handleReconnect}>
              Appuyer ici pour vous reconnecter
            </ReconnectButton>
          ) : (
            undefined
          )}
        </StatusText>
      </animated.div>
    </SyncContainer>
  );
}

export default Sync;
