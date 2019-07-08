import React from "react";

import { Container, Input, SearchButton } from "./styles";

type Props = {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

const SearchInput: React.FunctionComponent<Props> = ({
  search,
  handleChange,
  handleSearch
}) => (
  <Container>
    <Input
      value={search}
      placeholder="chercher un colis"
      onChange={handleChange}
    />
    <SearchButton onClick={handleSearch}>
      <span role="img" aria-label="search">
        🔎
      </span>
    </SearchButton>
  </Container>
);

export default SearchInput;
