import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components'
import dark from '../styles/themes/dark';





function MyApp({ Component, pageProps }) {
   
   
  return(
    <ThemeProvider theme={dark}>
     <Header/>
     <Component {...pageProps} />
     <ThemeLigthGlobal/>
    
    </ThemeProvider>
  ) ;
}

export default MyApp
