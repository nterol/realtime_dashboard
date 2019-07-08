import React from "react";

import { UL, LI, Step, Icon } from "./style";
import { Row } from "../layout";

type Props = {
  id: string;
  steps: Array<{
    status: string;
    name: string;
    icon: string;
  }>;
  current: string;
};

const Timeline = ({ steps, current, id }: Props) => {
  const currentIndex = steps.findIndex(e => e.status === current);
  return (
    <UL>
      {steps.map(({ name, icon, status }, i) => {
        const active = i <= currentIndex;
        return (
          <LI key={`${id}_${status}`}>
            <Row>
              <Step
                data-test={current === "transmitted" ? "mark-step" : ""}
                active={active}
              >
                {name}
              </Step>
              <Icon>
                <span role="img">{icon}</span>
              </Icon>
            </Row>
          </LI>
        );
      })}
    </UL>
  );
};

export default Timeline;
