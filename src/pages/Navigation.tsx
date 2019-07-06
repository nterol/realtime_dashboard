import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "../components/menu/Menu";
import All from "./all/All";
import Created from "./created/Created";
import Delivered from "./delivered/Delivered";
import Preparation from "./preparation/Preparation";
import Shipped from "./shipped/Shipped";
import Exception from "./exception/Exception";

import { Row } from "../components/layout";

function Navigation() {
  return (
    <Row>
      <Menu />
      <Switch>
        <Route path="/" exact component={All} />
        <Route path="/created" component={Created} />
        <Route path="/preparation" component={Preparation} />
        <Route path="/shipped" component={Shipped} />
        <Route path="/delivered" component={Delivered} />
        <Route path="/exception" component={Exception} />
      </Switch>
    </Row>
  );
}

export default Navigation;
