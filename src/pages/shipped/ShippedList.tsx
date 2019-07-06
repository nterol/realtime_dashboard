import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../components/types";

import Empty from "../Empty";

function ShippedList() {
  const shipped = useSelector((state: StateType) => state.packages.shipped);

  return shipped.length ? (
    <div>
      {shipped.map(order => (
        <div key={order.id}>{order.organization}</div>
      ))}
    </div>
  ) : (
    <Empty type="shipped" />
  );
}

export default ShippedList;
