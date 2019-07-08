import React, { FunctionComponent } from "react";
import moment from "moment";

import Card from "../card/Card";
import { Package } from "../types";
import { ListContainer } from "./styles";

type Props = {
  store: Array<Package>;
  current: string;
};

const List: FunctionComponent<Props> = ({ store, current }) => (
  <ListContainer large={store.length > 1}>
    {store.map(order => {
      const formatDate = moment(order.create_time).format("D/M/YY à HH:MM");
      return (
        <Card
          key={order.id}
          order={order}
          current={current}
          date={formatDate}
        />
      );
    })}
  </ListContainer>
);

export default List;
