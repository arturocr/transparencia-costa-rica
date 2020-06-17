const title = 'Transparencia Costa Rica';
const description = '¡Queremos transparencia!';
const domain = 'transparencia-costa-rica.vercel.app';

const SEO = {
  title,
  description,
  canonical: `https://${domain}`,
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: `https://${domain}`,
    title,
    description,
    images: [
      {
        url: `https://${domain}/images/og.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@arturocr',
    site: '@arturocr',
    cardType: 'summary_large_image',
  },
};

export default SEO;
