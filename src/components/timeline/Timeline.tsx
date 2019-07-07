import React from "react";

import { UL, LI, Step, Icon } from "./style";
import { Row } from "../layout";

type Props = {
  steps: Array<{
    name: string;
    icon: string;
  }>;
  current: string;
};

const Timeline = ({ steps, current }: Props) => {
  const currentIndex = steps.findIndex(e => e.name === current);
  return (
    <div>
      <UL>
        {steps.map(({ name, icon }, i) => {
          const active = i <= currentIndex;
          return (
            <LI>
              <Row>
                <Step active={active}>{name}</Step>
                <Icon active={active}>
                  <span role="img">{icon}</span>
                </Icon>
              </Row>
            </LI>
          );
        })}
      </UL>
    </div>
  );
};

export default Timeline;
