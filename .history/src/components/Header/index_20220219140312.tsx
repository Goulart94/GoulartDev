import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer } from './styles';


interface props{
    hendleTheme(): void;
}


export default function Header(props: props) {

    const {asPath} = useRouter();

    const {title} = useContext(ThemeContext);

    

    
    
  return (
      
      <HeaderContainer>
          <div className='HeaderContent'>
            
              <img src="../../imgs/logo01.png" alt="logo" />
              <nav >
                  <a className={asPath === '/' ? 'active' : ''} href="/">Home</a>
                  <a className={asPath ==='/About' ? 'active' : '' } href="/about">Sobre</a>
                  <a className={asPath ==='/Po' ? 'active' : '' }>Portfólio</a>
                  <a>Contatos</a>
                </nav>
                <div className='SwicthTheme'>
                    <Switch
                    checked={title === 'ligth'}
                    onChange={props.hendleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                    
                   />
    
                </div>
                
          </div>
      </HeaderContainer>
  );
}
