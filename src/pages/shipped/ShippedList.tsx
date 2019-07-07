import React from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../components/types";

import List from "../../components/lists/List";
import Empty from "../Empty";

function ShippedList() {
  const shipped = useSelector((state: StateType) => state.packages.shipped);

  return shipped.length ? (
    <div>
      <List store={shipped} current="shipped" />
    </div>
  ) : (
    <Empty type="shipped" />
  );
}

export default ShippedList;
