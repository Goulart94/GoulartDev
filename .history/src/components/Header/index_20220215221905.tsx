import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import style from '../Header/header.module.scss';
import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer } from './style';


interface props{
    hendleTheme(): void;
}


export default function Header(props: props) {

    const {asPath} = useRouter();

    const {title} = useContext(ThemeContext);

    

    
    
  return (
      
      <HeaderContainer>
          <div className={style.HeaderContent}>
            
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
                
          </div>
      </HeaderContainer>
  );
}
