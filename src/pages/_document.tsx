import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

import appConfig from 'utils/config';

const config = getConfig();
console.log({ config });

const NODE_ENV =
  (config.publicRuntimeConfig && config.publicRuntimeConfig.NODE_ENV) ||
  'development';

const isProduction = NODE_ENV === 'production';

class MyDocument extends Document {
  private setGoogleAnalytics() {
    const googleAnalytics: { __html: string } = {
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${appConfig.GoogleAnalyticsTrackID}');`,
    };

    return googleAnalytics;
  }

  // eslint-disable-next-line class-methods-use-this
  private setGoogleTagManager() {
    const googleTagManager: { __html: string } = {
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${appConfig.GoogleTagManagerTrackID}');`,
    };

    return googleTagManager;
  }

  public static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            httpEquiv="Content-Language"
            content={appConfig.Language.Code}
          />
          <meta
            httpEquiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="application-name" content={appConfig.AppName} />
          <meta
            name="generator"
            content="The Virtual Forge (thevirtualforge.com)"
          />
          <meta name="robots" content="index,follow" />
          <meta name="language" content={appConfig.Language.Code} />
          <meta name="reference" content={appConfig.AppName} />
          <meta name="theme-color" content={appConfig.AppThemeColor} />
          <meta property="og:site_name" content={appConfig.AppName} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={appConfig.Language.CodeRegion} />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"
            integrity="sha256-kfyezB/18U0JNw/E1sMpYty+9Z/umuPExduFzWp/tY8="
            crossOrigin="anonymous"
          />
          <script defer src="https://unpkg.com/unfetch/polyfill" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap"
            rel="stylesheet"
          />

          {isProduction && appConfig.GoogleAnalyticsTrackID && (
            <>
              {/* eslint-disable-next-line react/no-danger */}
              <link
                rel="dns-prefetch"
                href="https://www.google-analytics.com"
              />
              <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
            </>
          )}
          {isProduction && appConfig.GoogleTagManagerTrackID && (
            <>
              <link
                rel="dns-prefetch"
                href="https://www.googletagmanager.com"
              />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id="${appConfig.GoogleTagManagerTrackID}"`}
              />
              {/* eslint-disable-next-line react/no-danger */}
              <script dangerouslySetInnerHTML={this.setGoogleTagManager()} />
            </>
          )}
        </Head>
        <body>
          {isProduction && appConfig.GoogleTagManagerTrackID && (
            <noscript>
              <NoScriptIFrame
                title="The Virtual Forge (No Script)"
                src={`https://www.googletagmanager.com/ns.html?id=${appConfig.GoogleTagManagerTrackID}`}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

const NoScriptIFrame = styled.iframe`
  display: none !important;
  visibility: hidden !important;
  width: 0 !important;
  height: 0 !important;
`;
