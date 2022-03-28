import Navbar from '../components/Navbar/Navbar';
import '../styles/root.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
