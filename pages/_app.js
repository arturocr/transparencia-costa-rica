import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import withGA from 'next-ga';

import SEO from '../next-seo.config';
import Layout from '../components/layout';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default withGA('UA-169794061-1', Router)(MyApp);
