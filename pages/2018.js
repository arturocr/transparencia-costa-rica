import { NextSeo } from 'next-seo';
import { readJsonSync } from 'fs-extra';
import SEO from '../next-seo.config';
import List from '../components/list';
import Tabs from '../components/tabs';

const url = `${SEO.canonical}/2018`;
const title = `${SEO.title} - Lista 2018`;
const description = `${SEO.description} - Lista de empresas que reportaron pérdidas o cero ganancias en el 2018.`;

export async function getStaticProps() {
  const gcn2018 = readJsonSync('./data/GCN-2018.json');
  const getes2018 = readJsonSync('./data/GETES-2018.json');
  return {
    props: {
      data: {
        gcn2018,
        getes2018,
      },
    },
  };
}

export default ({ data }) => (
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
    <h1 className='text-xl font-medium mb-5'>Lista del año 2018</h1>
    <p className='my-4'>
      Acá se presenta la lista de Grandes Contribuyentes Nacionales y Grandes
      Empresas Territoriales que han reportado pérdidas o cero ganancias en el
      año 2018.
    </p>
    <Tabs>
      <div label='Grandes Contribuyentes Nacionales'>
        <List items={data.gcn2018} />
      </div>
      <div label='Grandes Empresas Territoriales'>
        <List items={data.getes2018} />
      </div>
    </Tabs>
  </>
);
