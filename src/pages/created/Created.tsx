import React from "react";

import { Page, Main } from "../page";
import CreatedList from "./CreatedList";

const Created = () => (
  <Page>
    <h1>
      Nouvelles commandes{" "}
      <span role="img" aria-label="created">
        ✨
      </span>
    </h1>
    <Main>
      <CreatedList />
    </Main>
  </Page>
);

export default Created;
