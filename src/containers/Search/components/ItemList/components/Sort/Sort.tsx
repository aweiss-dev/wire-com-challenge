import { ReactNode } from "react";

import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import styled, { css } from "styled-components";

import {
  AlphabetIcon,
  AscIcon,
  DescIcon,
  StarIcon,
} from "../../../../../../components/SvgIcon/Icons";

const ListSortWrapper = styled(ToggleButtonGroup)(
  ({ theme }) => css`
    border-radius: ${theme.borderRadius.m};
  `
);

export type SortOption =
  | "UNSORTED"
  | "ALPHABET_DESC"
  | "ALPHABET_ASC"
  | "STARS_DESC"
  | "STARS_ASC";

const sortItemsContent: Record<SortOption, ReactNode> = {
  UNSORTED: <>Unsorted</>,
  ALPHABET_ASC: (
    <>
      <AlphabetIcon /> <AscIcon />
    </>
  ),
  ALPHABET_DESC: (
    <>
      <AlphabetIcon /> <DescIcon />
    </>
  ),
  STARS_ASC: (
    <>
      <StarIcon /> <AscIcon />
    </>
  ),
  STARS_DESC: (
    <>
      <StarIcon /> <DescIcon />
    </>
  ),
};

interface SortProps {
  onChange: (option: SortOption) => void;
  activeValue: SortOption;
}
const Sort = ({ onChange, activeValue }: SortProps) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: SortOption | null
  ) => {
    if (value) {
      onChange(value);
    }
  };
  return (
    <ListSortWrapper
      value={activeValue}
      exclusive
      onChange={handleChange}
      aria-label="list sorting"
    >
      {(Object.keys(sortItemsContent) as (keyof typeof sortItemsContent)[]).map(
        (item, index) => (
          <ToggleButton
            value={item}
            size="small"
            key={`${item}-${index}`}
            aria-label={`Sort by ${item.replace("_", " ").toLowerCase()}`}
          >
            {sortItemsContent[item]}
          </ToggleButton>
        )
      )}
    </ListSortWrapper>
  );
};

export { Sort };
