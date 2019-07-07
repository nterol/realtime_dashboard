import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../components/types";

import List from "../../components/lists/List";
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
      {!!created.length ? (
        <>
          <h2>Commandes toute fraiches: </h2>
          <List store={created} current="created" />
        </>
      ) : (
        undefined
      )}

      {!!transmitted.length ? (
        <>
          <h2>Commandes transmises :</h2>
          <List store={transmitted} current="transmitted" />
        </>
      ) : (
        undefined
      )}
    </div>
  );
}

export default CreatedList;
