import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components'
import dark from '../styles/themes/dark';
import ligth from '../styles/themes/ligth';

import usePersistedState from '../utils/usePersistedState'
import { Head } from 'next/document';





function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState('theme', dark);

  const handleTheme =()=>{
    setTheme(theme.title === 'dark' ? ligth : dark);

  };
  
   
  return(
   <ThemeProvider theme={theme}> 
     
    
     <Header hendleTheme={handleTheme}/>
     <Component {...pageProps} />
     <ThemeLigthGlobal/>
    
    </ThemeProvider>
  ) ;
}

export default MyApp
