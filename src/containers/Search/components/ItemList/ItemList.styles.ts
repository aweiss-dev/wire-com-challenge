import styled, { css } from "styled-components";

const MainWrapper = styled.div(
  ({ theme }) => css`
    align-items: center;
    border: 1px solid ${theme.colorPalette.shades[300]};
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-radius: ${theme.borderRadius.s};
    display: flex;
    flex-direction: column;
    gap: ${theme.space.s};
    justify-content: center;
    padding: ${theme.space.s} 0;

    & > hr {
      border-color: -internal-light-dark(
        rgb(118, 118, 118),
        rgb(133, 133, 133)
      );
    }

    & > * {
      justify-content: center;
      width: 100%;
    }
  `
);
const ErrorWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.colorPalette.accent.red};
    border-radius: ${theme.borderRadius.s};
    color: #fff;
    padding: ${theme.space.s} 0;
    text-align: center;
  `
);
const ListWrapper = styled.ol(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
  `
);

export { ErrorWrapper, MainWrapper, ListWrapper };
