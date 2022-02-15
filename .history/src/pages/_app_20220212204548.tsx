import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global'


function MyApp({ Component, pageProps }) {
   
   
  return(
    <>
     <Header/>
     <Component {...pageProps} />
     <ThemeLigthGlobal/>
    </>
  ) ;
}

export default MyApp
