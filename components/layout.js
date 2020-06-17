import Header from '../components/header';
import Footer from '../components/footer';

export default ({ children }) => {
  return (
    <>
      <Header />
      <main className='container mx-auto p-5'>{children}</main>
      <Footer />
    </>
  );
};
