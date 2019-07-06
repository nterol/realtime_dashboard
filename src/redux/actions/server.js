import channelStatus from "../types/channelStatus";

export const startServer = () => ({ type: channelStatus.start });
export const stopServer = () => ({
  type: channelStatus.stop
});
