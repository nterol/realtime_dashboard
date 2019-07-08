import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { RawSync } from "../Sync";

const mockStore = configureStore();

let store;
let container;

const fakeStore = { server: { status: "on" } };

describe("Sync test suite", () => {
  beforeEach(() => {
    store = mockStore(fakeStore);
  });
  it("Should render without crashing", () => {
    shallow(
      <RawSync
        status="on"
        showStatus={true}
        retries={3}
        animation={""}
        handleReconnect={() => {}}
        setShowStatus={() => {}}
      />
    );
  });
});
