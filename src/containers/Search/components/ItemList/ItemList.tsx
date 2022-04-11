import { useCallback, useEffect, useState } from "react";

import { Divider, LinearProgress } from "@mui/material";

import { Libraries } from "../../Search.types";
import { Item } from "../Item";
import { Pagination } from "./components/Pagination";
import { Sort, SortOption } from "./components/Sort";
import { ErrorWrapper, MainWrapper, ListWrapper } from "./ItemList.styles";

const maxVisibleItems = 5;
const getSortedItemsBy: Record<SortOption, (items: Libraries) => Libraries> = {
  ALPHABET_ASC: (items) =>
    items.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    ),
  ALPHABET_DESC: (items) => getSortedItemsBy.ALPHABET_ASC(items).reverse(),
  STARS_ASC: (items) => items.sort((a, b) => a.stars - b.stars),
  STARS_DESC: (items) => getSortedItemsBy.STARS_ASC(items).reverse(),
};

interface ResultListProps {
  items: Libraries;
  loading: boolean;
  onSortChange: (value: SortOption) => void;
  error?: string;
}
const ItemList = ({
  items,
  loading,
  error = "",
  onSortChange,
}: ResultListProps) => {
  const [sortedItems, setSortedItems] = useState<Libraries>([]);
  const [visibleItems, setVisibleItems] = useState<Libraries>([]);
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("ALPHABET_ASC");

  useEffect(() => {
    if (items.length) {
      setSortedItems(getSortedItemsBy[sortBy]([...items]));
      setActivePage(1);
    }
  }, [items, sortBy]);

  useEffect(() => {
    if (sortedItems.length) {
      setVisibleItems(sortedItems.slice(0, maxVisibleItems));
    }
  }, [sortedItems]);

  useEffect(() => {
    onSortChange(sortBy);
  }, [sortBy, onSortChange]);

  const ListPagination = useCallback(
    () => (
      <Pagination
        itemCount={sortedItems.length}
        maxVisibleItems={maxVisibleItems}
        onChange={(page: number) => {
          setVisibleItems(
            sortedItems.slice(
              (page - 1) * maxVisibleItems,
              page * maxVisibleItems
            )
          );
          setActivePage(page);
        }}
        activePage={activePage}
      />
    ),
    [sortedItems, activePage]
  );

  if (loading) {
    return <LinearProgress />;
  }

  if (error.length || !items.length) {
    return (
      <ErrorWrapper
        role="alert"
        aria-errormessage="resultListError"
        aria-invalid={true}
      >
        <strong id="resultListError">
          {error.length
            ? error
            : "No results found, please try a different query!"}
        </strong>
      </ErrorWrapper>
    );
  }

  return (
    <MainWrapper>
      <ListPagination />
      <Divider />
      <Sort onChange={(value) => setSortBy(value)} activeValue={sortBy} />
      <Divider />
      <ListWrapper aria-label="search results">
        {visibleItems.map(
          ({ description, homepage, name, repository_url, stars }, index) => (
            <li key={`${name}-${index}`} aria-label="search result item">
              <Item
                description={description}
                name={name}
                homepage={homepage}
                repository_url={repository_url}
                stars={stars}
              />
              <Divider />
            </li>
          )
        )}
      </ListWrapper>
      <ListPagination />
    </MainWrapper>
  );
};

export { ItemList };
