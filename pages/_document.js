import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es-CR">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta name="description" content="¡Queremos transparencia!"/>
          <link href="/favicon.png" rel="shortcut icon" />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
