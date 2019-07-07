import React from "react";
import { Page, Main } from "../page";
import ShippedList from "./ShippedList";

const Shipped = () => {
  return (
    <Page>
      <h1>
        <span role="img" aria-label="shipped">
          🚚
        </span>{" "}
        Shipped
      </h1>

      <Main>
        <ShippedList />
      </Main>
    </Page>
  );
};

export default Shipped;
