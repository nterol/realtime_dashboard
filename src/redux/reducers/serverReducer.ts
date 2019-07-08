import serverStatus from "../types/serverStatus";

type ServerState = {
  status: string | undefined;
};

const serverState = {
  status: undefined
};

function serverReducer(
  state: ServerState = serverState,
  { type }: { type: string }
) {
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
