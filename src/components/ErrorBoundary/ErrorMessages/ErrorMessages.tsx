import { ReactNode } from "react";

import styled, { css } from "styled-components";

const Wrapper = styled.div(
  ({ theme }) => css`
    color: ${theme.colorTheme.colors.text};
    display: flex;
    flex-direction: column;
    gap: ${theme.space.xs};

    & strong {
      font-size: ${theme.fontSize.xl};
      line-height: ${theme.fontSize.xl};
    }
  `
);

interface DefaultErrorMessageProps {
  children?: ReactNode;
}
const DefaultErrorMessage = ({ children = "" }: DefaultErrorMessageProps) => (
  <Wrapper>
    <strong>Oops!</strong>
    <p>Something went wrong on our side. Please try again later...</p>
    {children}
  </Wrapper>
);

interface CustomErrorMessageProps {
  message: string;
  title?: string;
  children?: ReactNode;
}
const CustomErrorMessage = ({
  message,
  title = "Not possible!",
  children = "",
}: CustomErrorMessageProps) => (
  <Wrapper>
    <strong>{title}</strong>
    <div>{message}</div>
    {children}
  </Wrapper>
);

export { DefaultErrorMessage, CustomErrorMessage };
