import Header from '../components/Header';
import '../styles/global.ts';

function MyApp({ Component, pageProps }) {
   
   
  return(
    <>
     <Header/>
     <Component {...pageProps} />
    </>
  ) ;
}

export default MyApp
