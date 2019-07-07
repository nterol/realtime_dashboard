import React from "react";

import { Page, Main } from "../page";
import AllList from "./AllList";

const All = () => (
  <Page>
    <h1>
      <span role="img" aria-label="preparation">
        🗂
      </span>{" "}
      Tous les colis
    </h1>
    <Main>
      <AllList />
    </Main>
  </Page>
);

export default All;
