import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer, HeaderContent } from './style';



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
                  <a className={asPath === '/' ? 'active' : ''} href="/">Home</a>
                  <a className={asPath ==='/about' ? 'active' : '' } href="/about">Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                </nav>
                <div className=
                  'SwicthTheme'>
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
