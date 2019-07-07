import React from "react";
import { animated, useSpring } from "react-spring";
import { Container } from "./styles";
import { Package } from "../types";
import Timeline from "../timeline/Timeline";

type Props = {
  order: Package;
  current: string;
};

const steps = [
  { name: "created", icon: "✨" },
  { name: "transmitted", icon: "✅" },
  { name: "en préparation", icon: "🏗" },
  { name: "preparé", icon: "📦" },
  { name: "en cours de livraison", icon: "⛵️" },
  {
    name: "livré",
    icon: "📬"
  }
];

function Card({ order, current }: Props) {
  const aProps = useSpring({
    opacity: 1,
    transform: "translate3D(100%, 0%, 0%)",
    from: { opacity: 0, transform: "translate3D(0%, 0%,0%)" }
  });

  return (
    <animated.div style={{ marginBottom: "16px", ...aProps }}>
      <Container>
        {order.organization}
        <div>
          <Timeline steps={steps} current={current} />
        </div>
      </Container>
    </animated.div>
  );
}

export default Card;
