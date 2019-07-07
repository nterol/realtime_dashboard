import React from "react";
import { useSelector } from "react-redux";

import { StateType } from "../../components/types";
import List from "../../components/lists/List";

import Empty from "../Empty";

function DeliveredList() {
  const delivered = useSelector((state: StateType) => state.packages.delivered);

  return delivered.length ? (
    <List store={delivered} current="delivered" />
  ) : (
    <Empty type="delivered" />
  );
}

export default DeliveredList;
