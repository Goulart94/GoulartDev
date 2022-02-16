import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer, HeaderContent } from './style';
import { style } from '@mui/system';


interface props{
    hendleTheme(): void;
}


export default function Header(props: props) {

    const {asPath} = useRouter();

    const {title} = useContext(ThemeContext);

    

    
    
  return (
      
    <HeaderContainer>
          <HeaderContent>
            
              <img src="../../imgs/logo.png" alt="logo" />
              <nav >
                  <a className={asPath === '/' ? style.active : ''} href="/">Home</a>
                  <a className={asPath ==='/about' ? style.active : '' } href="/about">Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                </nav>
                <div className={style.SwicthTheme}>
                    <Switch
                    checked={title === 'ligth'}
                    onChange={props.hendleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                    
                   />
    
                </div>
                
          </HeaderContent>
      </HeaderContainer>
  );
}
