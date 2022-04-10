import { ReactNode, useMemo } from "react";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import styled, { css } from "styled-components";

import { defaultTheme } from "../../Theme";
import { FontFaces } from "./global/FontFaces";
import { Reset } from "./global/Reset";

const MainWrapper = styled.div(
  ({ theme }) => css`
    font-family: ${theme.font.MPlus1P};
    height: 100vh;
    width: 100%;
  `
);

interface BaseThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider = ({ children }: BaseThemeProviderProps) => {
  const theme = useMemo(() => {
    const tempTheme = {
      ...defaultTheme,
    };

    const muiTheme = createTheme();
    muiTheme.breakpoints.values = {
      ...defaultTheme.breakpoint,
    };

    muiTheme.palette.primary = {
      contrastText: tempTheme.colorTheme.colors.text,
      main: tempTheme.colorTheme.colors.primary,
      dark: tempTheme.colorTheme.colors.primaryDark,
      light: tempTheme.colorTheme.colors.primaryLight,
    };
    return { ...muiTheme, ...tempTheme };
  }, []);

  return (
    <>
      <FontFaces />
      <Reset />
      <MuiThemeProvider theme={theme}>
        <MainWrapper id="root">{children}</MainWrapper>
      </MuiThemeProvider>
    </>
  );
};

export { ThemeProvider };
