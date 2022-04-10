import { useEffect, useState } from "react";

import styled, { css } from "styled-components";

import { ItemList } from "./components/ItemList";
import { SearchField } from "./components/SearchField";
import { fetchLibraries } from "./Search.client";
import { Libraries } from "./Search.types";

const MainWrapper = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.s};
  `
);

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [queryResults, setQueryResults] = useState<Libraries>([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setErrorText("");
    setQueryResults([]);
    setLoading(true);
    const timeOutId = setTimeout(
      () =>
        fetchLibraries(inputValue)
          .then(({ data }) => {
            setQueryResults(data.libraries ? data.libraries : []);
          })
          .catch(() => {
            setErrorText(
              "Oops, something went wrong when accessing data. Please try again later!"
            );
          })
          .finally(() => setLoading(false)),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  return (
    <MainWrapper role="search">
      <SearchField
        value={inputValue}
        onValueChange={(value) => setInputValue(value)}
        errorText={""}
      />
      <ItemList items={queryResults} loading={loading} error={errorText} />
    </MainWrapper>
  );
};

export { Search };
