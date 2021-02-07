import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Maven Pro', sans-serif;

    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Satisfy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Maven+Pro:wght@400;500;600;700;800;900&family=Satisfy&display=swap" rel="stylesheet" />

        <title>Attack on Titan Quiz</title>
        <link rel="shortcut icon" href="/favcafe.png" />
        <meta name="title" content="Attack on Titan Quiz" />
        <meta name="description" content="Um quiz sobre café para você se divertir!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Attack on Titan Quiz" />
        <meta property="og:description" content="Um quiz sobre Attack on Titan para você se divertir!" />
        <meta property="og:image" content="https://preview.redd.it/gy8918f11p551.png?width=960&crop=smart&auto=webp&s=343a21e39595e699d5bcfcd7fbce524f4d023fc2" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Attack on Titan Quiz" />
        <meta property="twitter:description" content="Um quiz sobre café para você se divertir!" />
        <meta property="twitter:image" content="https://preview.redd.it/gy8918f11p551.png?width=960&crop=smart&auto=webp&s=343a21e39595e699d5bcfcd7fbce524f4d023fc2" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
