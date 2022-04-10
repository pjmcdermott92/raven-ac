import Navbar from '../components/Navbar/Navbar';
import '../styles/root.scss';

function MyApp({ Component, pageProps }) {
  console.log(new Date().toString());
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
