import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../components/types";

import Empty from "../Empty";

function CreatedList() {
  const created = useSelector((state: StateType) => state.packages.created);
  const transmitted = useSelector(
    (state: StateType) => state.packages.transmitted
  );

  return !created.length && !transmitted.length ? (
    <Empty type="created" />
  ) : (
    <div>
      <h2>Commandes toute fraiches: </h2>
      <div>
        {created.map(order => (
          <div key={order.id}>
            {order.organization}
            <br />
            <span>{order.payload.reference}</span>
          </div>
        ))}
      </div>
      <div>
        <h2>Commandes transmises :</h2>
        <div>
          {transmitted.map(order => (
            <div key={order.id}>
              {order.organization}
              <br />
              <span>{order.payload.reference}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatedList;
