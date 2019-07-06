import serverStatus from "../types/serverStatus";

const serverState = {
  status: undefined
};

function serverReducer(state = serverState, { type }) {
  switch (type) {
    case "START":
      return { status: "reconnect" };
    case "START_CHANNEL":
      return { status: "reconnect" };
    case serverStatus.on: {
      return { status: "on" };
    }

    case serverStatus.off: {
      return { status: "off" };
    }
    case "SERVER_OF": {
      return { status: "off" };
    }
    case serverStatus.reconnect: {
      return { status: "reconnect" };
    }
    default:
      return state;
  }
}

export default serverReducer;
