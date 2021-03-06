import Link from 'next/link';

const Index = () => (
  <>
    <h1 className='mb-5 text-xl font-medium'>¡Queremos transparencia!</h1>
    <p className='my-4'>
      Tal y como el diputado Jose María Villalta{' '}
      <a
        className='text-green-700 hover:text-green-800'
        href='https://twitter.com/josemvillalta/status/1273040659642036224'
        target='_blank'
        rel='noopener noreferrer'>
        destacó
      </a>
      , una mayoría de diputados y diputadas de la Comisión de Asuntos
      Hacendarios votó en contra de obligar al Ministerio de Hacienda a publicar
      la lista de grandes empresas que declaran cero ganancias.
    </p>
    <p className='my-4'>
      Ante tal situación y dado que la jurisprudencia constitucional permite
      solicitarla, el despacho del señor diputado solicitó la lista actualizada
      de esas grandes empresas que en 2018 y 2019 reportaron pérdidas o cero
      utilidades.
    </p>
    <p className='my-4'>
      Concuerdo completamente con Don José María, en que no debería ser
      necesario solicitar esta información año tras año y el Ministerio de
      Hacienda debería publicarla de manera periódica.
    </p>
    <p className='my-4'>
      Es por eso que he decidido tomar esas listas que el señor Villalta{' '}
      <a
        className='text-green-700 hover:text-green-800'
        href='https://twitter.com/josemvillalta/status/1273040668290662400'
        target='_blank'
        rel='noopener noreferrer'>
        compartió
      </a>{' '}
      y volcarlas en este sitio web para que la información esté más al alcance
      de los y las costarricenses.
    </p>
    <p className='my-4'>
      Ya es suficiente de cargar con más impuestos a la honesta clase
      trabajadora, mientras a vista de todos estas grandes empresas se dejan en
      sus bolsillos los impuestos que deberían pagar al Estado cada año.
    </p>
    <p className='my-4'>
      <Link href='/2018'>
        <a className='text-green-700 hover:text-green-800'>Lista del 2018</a>
      </Link>
    </p>
    <p className='my-4'>
      <Link href='/2019'>
        <a className='text-green-700 hover:text-green-800'>Lista del 2019</a>
      </Link>
    </p>
    <hr />
    <p className='my-4'>
      <a
        className='text-green-700 hover:text-green-800'
        href='/files/DM-0247-2020-v2.pdf'
        target='_blank'>
        Documento oficial con las listas
      </a>
    </p>
  </>
);

export default Index;
