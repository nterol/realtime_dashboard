import React from "react";
import { animated, useSpring } from "react-spring";
import {
  Container,
  DangerCard,
  TextContainer,
  SmartFlex,
  Trivia
} from "./styles";
import { Package } from "../types";
import Timeline from "../timeline/Timeline";

type Props = {
  order: Package;
  current: string;
  date: string;
};

const steps = [
  { status: "created", name: "nouvelle commande", icon: "📝" },
  { status: "transmitted", name: "commande transmise", icon: "✅" },
  { status: "inPreparation", name: "en préparation", icon: "🏗" },
  { status: "prepared", name: "preparé", icon: "📦" },
  { status: "shipped", name: "en cours de livraison", icon: "🚚" },
  { status: "delivered", name: "livré", icon: "📬" }
];

function Card({ order, current, date }: Props) {
  const aProps = useSpring({
    opacity: 1,
    transform: "translate3D(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3D(-300px, 0px,0px)" }
  });

  return (
    <animated.div style={{ marginBottom: "16px", ...aProps }}>
      <Container>
        <SmartFlex>
          <TextContainer>
            <h1>{`Ref: ${order.payload.reference}`}</h1>
            {current !== "warning" ? (
              <p>
                <b>Détails: </b>
                {order.payload.description}
              </p>
            ) : (
              undefined
            )}
            <p>
              <b>Operator: </b>
              {order.payload.operator}
            </p>
            <p>
              <b>Date: </b>
              {date}
            </p>
          </TextContainer>
          <Trivia>
            {current !== "warning" ? (
              <Timeline id={order.id} steps={steps} current={current} />
            ) : (
              <DangerCard>{order.payload.description}</DangerCard>
            )}
          </Trivia>
        </SmartFlex>
      </Container>
    </animated.div>
  );
}

export default Card;
