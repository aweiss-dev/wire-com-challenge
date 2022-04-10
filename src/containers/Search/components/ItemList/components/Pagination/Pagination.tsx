import { Pagination as MuiPagination } from "@mui/material";
import styled, { css } from "styled-components";

const MainWrapper = styled.div(
  ({ theme }) => css`
    align-items: center;
    border-radius: ${theme.borderRadius.m};
    display: flex;
    flex-direction: row;
    gap: ${theme.space.s};
  `
);

interface PaginationProps {
  itemCount: number;
  activePage: number;
  onChange: (page: number) => void;
  maxVisibleItems: number;
}
const Pagination = ({
  itemCount,
  activePage,
  onChange,
  maxVisibleItems,
}: PaginationProps) => {
  const pageCount = Math.ceil(itemCount / maxVisibleItems);

  const handlePaginationChange = (page: number) => {
    onChange(page);
  };

  return (
    <>
      {pageCount > 1 && (
        <MainWrapper>
          <MuiPagination
            count={pageCount}
            page={activePage}
            color="primary"
            onChange={(event, page) => {
              event.preventDefault();
              handlePaginationChange(page);
            }}
          />
        </MainWrapper>
      )}
    </>
  );
};

export { Pagination };
