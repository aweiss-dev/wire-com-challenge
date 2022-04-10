import styled, { css } from "styled-components";

import { up } from "../../Theme/helper";

const MainWrapper = styled.main(
  () => css`
    display: grid;
    grid-template-areas: "content" "footer";
    grid-template-columns: 100%;
    margin: auto;
    max-width: 1200px;

    ${up("md")} {
      grid-template-areas: "sidebar content" "footer footer";
      grid-template-columns: auto 1fr;
    }
  `
);
const ContentWrapper = styled.div(
  ({ theme }) => css`
    grid-area: content;
    padding: ${theme.space.l};
  `
);
const Footer = styled.footer(
  ({ theme }) => css`
    grid-area: footer;
    padding: ${theme.space.l};
    text-align: center;
  `
);
const Copyright = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.xxs};
    margin-top: ${theme.space.l};

    & svg {
      margin-right: ${theme.space.s};
    }
  `
);

const SidebarWrapper = styled.aside(
  ({ theme }) => css`
    display: none;
    grid-area: sidebar;
    max-width: 250px;
    padding: ${theme.space.l};

    ${up("md")} {
      display: block;
    }
  `
);

const PlaceHolderImg = styled.img(
  ({ theme }) => css`
    border-radius: ${theme.borderRadius.l};
    height: 120px;
    min-height: 120px;
    object-fit: cover;
    padding: ${theme.space.xs};
    width: 100%;
  `
);

const PlaceHolderText = styled.h4(
  ({ theme }) => css`
    font-family: ${theme.font.Montserrat};
    font-size: ${theme.fontSize.l};
    line-height: ${theme.lineHeight.l};
    margin-bottom: ${theme.space.s};
    text-align: center;
  `
);

const Header = styled.header(
  ({ theme }) => css`
    background: ${theme.colorTheme.colors.primaryDark};
    border-bottom: 10px solid ${theme.colorTheme.colors.primaryLight};
    color: ${theme.colorTheme.colors.text};
    font-family: ${theme.font.OmegaCentauri};
    padding: ${theme.space.l};
    text-align: center;

    & h1 {
      font-size: ${theme.fontSize.xxl};
      line-height: ${theme.lineHeight.xxl};

      ${up("md")} {
        font-size: ${theme.fontSize.xxxxl};
        line-height: ${theme.lineHeight.xxxxl};
      }
    }
  `
);

export {
  Header,
  PlaceHolderImg,
  PlaceHolderText,
  MainWrapper,
  Footer,
  ContentWrapper,
  SidebarWrapper,
  Copyright,
};
