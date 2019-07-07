import packageStatus from "../types/packageStatus";
import { Package } from "../../components/types";

type PackageStore = Array<Package | undefined>;

type PackageState = {
  [k: string]: PackageStore;
};

const initialState: PackageState = {
  created: [],
  transmitted: [],
  inPreparation: [],
  prepared: [],
  shipped: [],
  delivered: [],
  warning: []
};

function packageReducer(
  state: any = initialState,
  { type, payload }: { type: string; payload: Package }
) {
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
      state[statusKey] = state[statusKey].map((order: Package) =>
        order.payload.reference === payload.payload.reference ? payload : order
      );
      return state;
    }
    case packageStatus.customer: {
      const [statusKey] = findPackage(state, payload.payload.reference);

      if (!statusKey) return { ...state, created: [...state.created, payload] };
      state[statusKey] = state[statusKey].map((order: Package) =>
        order.payload.reference === payload.payload.reference ? payload : order
      );
      return state;
    }

    default:
      return state;
  }
}

const findAndMove = (
  a: PackageStore,
  b: PackageStore,
  c: PackageStore,
  payload: Package
) => {
  const index = a.findIndex(order => {
    if (order !== undefined)
      return order.payload.reference === payload.payload.reference;
    return false;
  });
  if (index !== -1) {
    const [move] = a.splice(index, 1);
    return (b = [...b, move]);
  }
  const defaultIndex = c.findIndex(order => {
    if (order !== undefined)
      return order.payload.reference === payload.payload.reference;
    return false;
  });

  if (defaultIndex !== -1) {
    const [move] = c.splice(defaultIndex, 1);
    return (b = [...b, move]);
  } else return (b = [...b, payload]);
};

const findPackage = (state: PackageState, ref: string) =>
  Object.keys(state).filter(
    (k: string) =>
      state[k].findIndex((e: Package | undefined) => {
        if (e !== undefined) return e.payload.reference === ref;
        return false;
      }) > -1
  );

export default packageReducer;
