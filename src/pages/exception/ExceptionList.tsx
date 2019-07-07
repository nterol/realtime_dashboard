import React from "react";
import { useSelector } from "react-redux";

import List from "../../components/lists/List";
import Empty from "../Empty";
import { StateType } from "../../components/types";

function ExceptionList() {
  const warning = useSelector((state: StateType) => state.packages.warning);

  return warning.length ? (
    <List store={warning} current="warning" />
  ) : (
    <Empty type="warning" />
  );
}

export default ExceptionList;
