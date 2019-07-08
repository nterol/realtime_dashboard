import React from "react";
import { shallow } from "enzyme";
import Card from "../Card";

const fakeProps = {
  order: {
    id: "dkfjgh",
    create_time: "kdsj",
    organization: "d",
    type: "f",
    payload: {
      reference: "e",
      operator: "e",
      subtype: "e",
      short: "e",
      description: "e"
    }
  },
  current: "created",
  date: "today"
};

describe("Card Test suite", () => {
  it("Should render whithout crashing", () => {
    shallow(<Card {...fakeProps} />);
  });
});
