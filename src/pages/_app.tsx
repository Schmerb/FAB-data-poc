import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Theme from 'utils/theme';

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
