import styled, { css } from "styled-components";

import { DefaultErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Start } from "./pages/Start";

const MainWrapper = styled.div(
  () => css`
    margin: auto;
  `
);

const App = () => {
  return (
    <DefaultErrorBoundary>
      <ThemeProvider>
        <MainWrapper>
          <Start />
        </MainWrapper>
      </ThemeProvider>
    </DefaultErrorBoundary>
  );
};

export { App };
