import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import withGA from 'next-ga';

import SEO from '../next-seo.config';
import Layout from '../components/layout';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta content='/favicons/browserconfig.xml' name='msapplication-config' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicons/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  </>
);

export default withGA('UA-169794061-1', Router)(MyApp);
