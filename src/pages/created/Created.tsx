import React from "react";

import { Page, Main } from "../page";
import CreatedList from "./CreatedList";

const Created = () => (
  <Page>
    <h1>
      <span role="img" aria-label="created">
        📝
      </span>{" "}
      Nouvelles commandes
    </h1>
    <Main>
      <CreatedList />
    </Main>
  </Page>
);

export default Created;
