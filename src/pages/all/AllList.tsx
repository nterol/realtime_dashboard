import React, { useState } from "react";

import { useSelector } from "react-redux";
import { StateType, Package } from "../../components/types";

import Empty from "../Empty";

import SearchInput from "./SearchInput";
import SelfIndexList from "../../components/lists/SelfIndexList";

interface ExtendedPackage extends Package {
  statusIndex: number;
}

function AllList() {
  const [search, setSearch] = useState<string>("");
  const [orderFound, setFound] = useState<Array<ExtendedPackage | undefined>>(
    []
  );

  const fromStore = useSelector((state: StateType) => state.packages);

  const toArray = [...Object.values(fromStore)];
  const allPackages = toArray.flatMap(
    (arr, i): Array<ExtendedPackage> => {
      const x = arr.map(e => ({ ...e, statusIndex: i }));
      return x;
    }
  );

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => setSearch(value);

  const handleSearch = () => {
    const searchEnd: Array<ExtendedPackage> = allPackages.filter(
      order =>
        order.payload.reference === search ||
        order.payload.description === search
    );
    setFound(searchEnd);
  };

  return !!allPackages.length ? (
    <>
      <SearchInput
        handleChange={handleChange}
        handleSearch={handleSearch}
        search={search}
      />
      {!!orderFound.length ? (
        <div style={{ borderBottom: "1px solid", marginBottom: "16px" }}>
          <h2>Colis en relation avec votre recherche</h2>
          <SelfIndexList store={orderFound} />
        </div>
      ) : (
        undefined
      )}
      <SelfIndexList store={allPackages} />
    </>
  ) : (
    <Empty type="all" />
  );
}

export default AllList;
