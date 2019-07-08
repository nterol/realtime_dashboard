import React from "react";
import { Page, Main } from "../page";
import ExceptionList from "./ExceptionList";

const Exception = () => (
  <Page>
    <h1>
      <span role="img" aria-label="exception">
        ⚠️
      </span>{" "}
      Exceptions
    </h1>
    <Main>
      <ExceptionList />
    </Main>
  </Page>
);

export default Exception;
