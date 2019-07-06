import React from "react";
import { Page, Main } from "../page";
import ShippedList from "./ShippedList";

const Shipped = () => {
  return (
    <Page>
      <h1>
        Shipped{" "}
        <span role="img" aria-label="shipped">
          ⛵️
        </span>
      </h1>

      <Main>
        <ShippedList />
      </Main>
    </Page>
  );
};

export default Shipped;
