import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import "jest-styled-components";

import Sync, { RawSync } from "../Sync";

const mockStore = configureStore();

describe("Sync test suite", () => {
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

  it("Should have a red pastille", () => {
    const store = mockStore({ server: { status: "off" } });
    const wrapper = mount(
      <Provider store={store}>
        <Sync />
      </Provider>
    );
    const pastille = wrapper.find('div[data-test="network-pastille"]');
    expect(pastille).toHaveStyleRule("background", "#FF2951");
  });

  it("Should have a green pastille", () => {
    const store = mockStore({ server: { status: "on" } });
    const wrapper = mount(
      <Provider store={store}>
        <Sync />
      </Provider>
    );
    const pastille = wrapper.find('div[data-test="network-pastille"]');
    expect(pastille).toHaveStyleRule("background", "#23d160");
  });

  it("Should have an orange pastille", () => {
    const store = mockStore({ server: { status: "reconnect" } });
    const wrapper = mount(
      <Provider store={store}>
        <Sync />
      </Provider>
    );
    const pastille = wrapper.find('div[data-test="network-pastille"]');
    expect(pastille).toHaveStyleRule("background", "#fb9e67");
  });
});
