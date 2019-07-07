import React from "react";
import { Page, Main } from "../page";

import PreparationList from "./PreparationList";

const Preparation = () => (
  <Page>
    <h1>
      <span role="img" aria-label="preparation">
        🏗
      </span>{" "}
      Preparation
    </h1>

    <Main>
      <PreparationList />
    </Main>
  </Page>
);

export default Preparation;
