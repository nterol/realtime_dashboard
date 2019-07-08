import React from "react";
import { shallow, mount } from "enzyme";

import "jest-styled-components";

import Timeline from "../Timeline";

const steps: Array<{
  status: string;
  name: string;
  icon: string;
}> = [
  { status: "created", name: "nouvelle commande", icon: "📝" },
  { status: "transmitted", name: "commande transmise", icon: "✅" },
  { status: "inPreparation", name: "en préparation", icon: "🏗" },
  { status: "prepared", name: "preparé", icon: "📦" },
  { status: "shipped", name: "en cours de livraison", icon: "🚚" },
  { status: "delivered", name: "livré", icon: "📬" }
];

describe("Timeline test suite", () => {
  it("Should render without crashing", () => {
    shallow(<Timeline id="ksjdfhdjkhf" steps={steps} current="created" />);
  });
  test("mark green should be green", () => {
    const markStep = mount(
      <Timeline id="dfjhfggdfv" steps={steps} current="transmitted" />
    ).find('div[data-test="mark-step"]');
    expect(markStep).toHaveStyleRule("border-top", "3px solid #23d160");
  });
});
