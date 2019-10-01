import React from 'react';
import styled from 'styled-components';

const PageStyles = ({ children, noStyles }: PageStylesProps) => {
  if (noStyles) return children;

  return <GlobalStyles>{children}</GlobalStyles>;
};

export default PageStyles;

export interface PageStylesProps {
  children: any;
  noStyles?: boolean;
}

const GlobalStyles = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* text-align: center; */
    font-family: 'Montserrat', sans-serif;
  }

  p,
  label {
    /* text-align: center; */
    font-family: 'Roboto', sans-serif;
  }
`;
