import Header from '../components/Header';
import {themeLigthGlobal} from '../../styles/global'


function MyApp({ Component, pageProps }) {
   
   
  return(
    <>
     <Header/>
     <Component {...pageProps} />
    </>
  ) ;
}

export default MyApp
