import serverStatus from "../types/serverStatus";

const serverState = {
  status: undefined
};

function serverReducer(state = serverState, { type }) {
  switch (type) {
    case serverStatus.launch:
      return { status: "reconnect" };

    case serverStatus.on: {
      return { status: "on" };
    }

    case serverStatus.off: {
      return { status: "off" };
    }

    default:
      return state;
  }
}

export default serverReducer;
