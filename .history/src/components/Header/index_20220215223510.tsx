import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer, HeaderContent, Img,  Link,  Navhome } from './style';


interface props{
    hendleTheme(): void;
}


export default function Header(props: props) {

    const {asPath} = useRouter();

    const {title} = useContext(ThemeContext);

    

    
    
  return (
      
      <HeaderContainer>
          <HeaderContent>
            
              <Img src="../../imgs/logo.png" alt="logo" />
              <Navhome>
                  <Link className={asPath === '/' ? 'active': ''} href="/">Home</Link>
                  <a className={asPath ==='/about' ? 'active' : '' } href="/about">Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                </Navhome>
                <div className='SwicthTheme'>
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
