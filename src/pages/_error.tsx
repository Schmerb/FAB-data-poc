import React from 'react';
import styled from 'styled-components';

const ErrorPage = ({  }: ErrorPageProps) => {
  return (
    <Wrapper>
      <h1>404: Page not found</h1>
    </Wrapper>
  );
};

export interface ErrorPageProps {}

export default ErrorPage;

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
`;
