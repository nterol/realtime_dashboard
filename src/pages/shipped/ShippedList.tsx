import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../components/types";
import Card from "../../components/card/Card";

import Empty from "../Empty";

function ShippedList() {
  const shipped = useSelector((state: StateType) => state.packages.shipped);

  return shipped.length ? (
    <div>
      {shipped.map(order => (
        <Card key={order.id} order={order} current="shipped" />
      ))}
    </div>
  ) : (
    <Empty type="shipped" />
  );
}

export default ShippedList;
