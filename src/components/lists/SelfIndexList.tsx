import React from "react";
import moment from "moment";

import { ListContainer } from "./styles";
import { Package } from "../types";
import Card from "../card/Card";

interface ExtendedPackage extends Package {
  statusIndex: number;
}

type Props = {
  store: Array<ExtendedPackage>;
};

const statusList = [
  "created",
  "transmitted",
  "inPreparation",
  "prepared",
  "shipped",
  "delivered",
  "warning"
];

const SelfIndexList: React.FunctionComponent<Props> = ({ store }) => (
  <ListContainer large={store.length > 1}>
    {store.map(order => {
      const formatDate = moment(order.create_time)
        .locale("fr")
        .format("dddd D MMMM YYYY HH:MM ");
      return (
        <Card
          key={order.id}
          order={order}
          current={statusList[order.statusIndex]}
          date={formatDate}
        />
      );
    })}
  </ListContainer>
);

export default SelfIndexList;
