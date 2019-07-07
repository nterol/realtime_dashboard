import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../components/types";

import List from "../../components/lists/List";
import Empty from "../Empty";

function PreparationList() {
  const inPreparation = useSelector(
    (state: StateType) => state.packages.inPreparation
  );
  const prepared = useSelector((state: StateType) => state.packages.prepared);

  return !!inPreparation.length && !!prepared.length ? (
    <div>
      {!!inPreparation.length ? (
        <>
          <h2>En cours de préparation: </h2>
          <List store={inPreparation} current="inPreparation" />
        </>
      ) : (
        undefined
      )}
      {!!prepared.length ? (
        <>
          <h2>Prêtes !</h2>
          <List store={prepared} current="prepared" />
        </>
      ) : (
        undefined
      )}
    </div>
  ) : (
    <Empty type="prepared" />
  );
}

export default PreparationList;
