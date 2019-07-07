import React from "react";

import { Page, Main } from "../page";
import DeliveredList from "./DeliveredList";

const Delivered = () => (
  <Page>
    <h1>
      <span role="img" aria-label="delivered">
        📬
      </span>{" "}
      Delivered
    </h1>
    <Main>
      <DeliveredList />
    </Main>
  </Page>
);

export default Delivered;
