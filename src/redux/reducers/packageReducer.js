import packageStatus from "../types/packageStatus";

const initialState = {
  created: [],
  transmitted: [],
  inPreparation: [],
  prepared: [],
  shipped: [],
  delivered: [],
  warning: []
};

function packageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case packageStatus.created: {
      return { ...state, created: [...state.created, payload] };
    }

    case packageStatus.transmitted: {
      state.transmitted = findAndMove(
        state.created,
        state.transmitted,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.inPreparation: {
      state.inPreparation = findAndMove(
        state.transmitted,
        state.inPreparation,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.prepared: {
      state.prepared = findAndMove(
        state.inPreparation,
        state.prepared,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.shipped: {
      state.shipped = findAndMove(
        state.prepared,
        state.shipped,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.delivered: {
      state.delivered = findAndMove(
        state.shipped,
        state.delivered,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.warning: {
      state.warning = findAndMove(
        state.shipped,
        state.warning,
        state.created,
        payload
      );
      return state;
    }

    case packageStatus.destination: {
      const [statusKey] = findPackage(state, payload.payload.reference);

      if (!statusKey) return { ...state, created: [...state.created, payload] };
      state[statusKey] = state[statusKey].map(order =>
        order.payload.reference === payload.payload.reference ? payload : order
      );
      return state;
    }
    case packageStatus.customer: {
      const [statusKey] = findPackage(state, payload.payload.reference);

      if (!statusKey) return { ...state, created: [...state.created, payload] };
      state[statusKey] = state[statusKey].map(order =>
        order.payload.reference === payload.payload.reference ? payload : order
      );
      return state;
    }

    default:
      return state;
  }
}

const findAndMove = (a, b, c, payload) => {
  const index = a.findIndex(
    ({ payload: { reference } }) => reference === payload.payload.reference
  );
  if (index !== -1) {
    const [move] = a.splice(index, 1);
    return (b = [...b, move]);
  }
  const defaultIndex = c.findIndex(
    ({ payload: { reference } }) => reference === payload.payload.reference
  );

  if (defaultIndex !== -1) {
    const [move] = c.splice(defaultIndex, 1);
    return (b = [...b, move]);
  } else return (b = [...b, payload]);
};

const findPackage = (state, ref) =>
  Object.keys(state).filter(
    k => state[k].findIndex(e => e.payload.reference === ref) > -1
  );

export default packageReducer;
