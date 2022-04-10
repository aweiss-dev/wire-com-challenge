import { ReactNode } from "react";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import styled from "styled-components";

import { CustomErrorMessage, DefaultErrorMessage } from "./ErrorMessages";
import { DefaultException } from "./Exceptions";

const ErrorMessage = styled.div`
  padding: 2rem;
`;

const ErrorFallBack = ({ error }: FallbackProps) => (
  <ErrorMessage>
    {error instanceof DefaultException ? (
      <CustomErrorMessage message={error.message} />
    ) : (
      <DefaultErrorMessage />
    )}
  </ErrorMessage>
);

interface C3ErrorBoundaryProps {
  children: ReactNode;
}
const DefaultErrorBoundary = ({ children }: C3ErrorBoundaryProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallBack}>{children}</ErrorBoundary>
);

export { DefaultErrorBoundary };
