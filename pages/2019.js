import { NextSeo } from 'next-seo';
import { readJsonSync } from 'fs-extra';
import SEO from '../next-seo.config';

import List from '../components/list';
import Tabs from '../components/tabs';

const url = `${SEO.canonical}/2019`;
const title = `${SEO.title} - Lista 2019`;
const description = `${SEO.description} - Lista de empresas que reportaron pérdidas o cero ganancias en el 2019.`;

export async function getStaticProps() {
  const gcn2019 = readJsonSync('./data/GCN-2019.json');
  const getes2019 = readJsonSync('./data/GETES-2019.json');
  return {
    props: {
      data: {
        gcn2019,
        getes2019,
      },
    },
  };
}

const Year2019 = ({ data }) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
    <h1 className='mb-5 text-xl font-medium'>Lista del año 2019</h1>
    <p className='my-4'>
      Acá se presenta la lista de Grandes Contribuyentes Nacionales y Grandes
      Empresas Territoriales que han reportado pérdidas o cero ganancias en el
      año 2019.
    </p>
    <Tabs>
      <div label='Grandes Contribuyentes Nacionales'>
        <List items={data.gcn2019} />
      </div>
      <div label='Grandes Empresas Territoriales'>
        <List items={data.getes2019} />
      </div>
    </Tabs>
  </>
);

export default Year2019;
