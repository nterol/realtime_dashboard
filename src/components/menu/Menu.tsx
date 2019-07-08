import React from "react";
import { Link } from "react-router-dom";

import Sync from "../sync/Sync";

import { Col } from "../layout";
import { Container, Linklist } from "./styles";

const Menu: React.FunctionComponent = () => (
  <Container>
    <Col>
      <Sync />
      <Linklist>
        <Link to="/">Tous</Link>
        <Link to="/created">Nouveaux</Link>
        <Link to="/preparation">Preparation</Link>
        <Link to="/shipped">En livraison</Link>
        <Link to="/delivered">Livrés</Link>
        <Link to="/exception">Exception</Link>
      </Linklist>
    </Col>
  </Container>
);

export default Menu;
