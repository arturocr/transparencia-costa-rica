import Head from 'next/head';
import { readJsonSync } from "fs-extra";

import List from '../components/list';
import Tabs from '../components/tabs';

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

export default ({data}) => (
  <>
    <Head>
      <title>Transparencia Costa Rica - Lista 2019</title>
    </Head>
    <h1 className="text-xl font-medium mb-5">Lista del año 2019</h1>
    <p className='my-4'>Acá se presenta la lista de Grandes Contribuyentes Nacionales y Grandes Empresas Territoriales que han reportado pérdidas o cero ganancias en el año 2019.</p>
    <Tabs>
      <div label="Grandes Contribuyentes Nacionales">
        <List items={data.gcn2019} />
      </div>
      <div label="Grandes Empresas Territoriales">
        <List items={data.getes2019} />
      </div>
    </Tabs>
  </>
);
