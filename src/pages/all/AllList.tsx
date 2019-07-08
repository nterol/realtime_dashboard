import React, { useState } from "react";
import "array-flat-polyfill";

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

  const [error, setError] = useState<boolean>(false);

  const fromStore = useSelector((state: StateType) => state.packages);

  const toArray = [...Object.values(fromStore)];
  let allPackages: Array<ExtendedPackage | undefined> = [];
  if (!!toArray.length)
    allPackages = toArray.flatMap(
      (arr, i): Array<ExtendedPackage> => {
        const x = arr.map(e => ({ ...e, statusIndex: i }));
        return x;
      }
    );

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    error && setError(false);
    setSearch(value);
  };

  const handleSearch = () => {
    const searchEnd: Array<ExtendedPackage | undefined> = allPackages.filter(
      order => {
        if (order !== undefined)
          return (
            order.payload.reference === search ||
            order.payload.description === search
          );
        return undefined;
      }
    );
    !!searchEnd.length ? setFound(searchEnd) : setError(true);
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
      {error ? (
        <div style={{ borderBottom: "1px solid", marginBottom: "16px" }}>
          <h2>Aucun colis ne correspond à votre recherche...</h2>
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
