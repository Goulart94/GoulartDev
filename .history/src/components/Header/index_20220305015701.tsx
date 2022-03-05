import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Switch from '@mui/material/Switch';

import { ThemeContext } from 'styled-components';
import { HeaderContainer } from './styles';
import Link from 'next/link';


interface props{
    hendleTheme(): void;
}


export default function Header(props: props) {

    const {asPath} = useRouter();

    const theme = useContext(ThemeContext);

    

    

    
    
  return (
      
      <HeaderContainer>
          <div className='HeaderContent'>
            
              <img src="../../imgs/logo.png" alt="logo" />
                <nav >
                 <Link href={"/"}> <a className={asPath === '/' ? 'active' : ''}>Home</a></Link>
                 <Link href={"/about"}><a className={asPath ==='/about' ? 'active' : '' }>Sobre</a></Link>
                 <Link href={"/portfolio"}> <a className={asPath ==='/portfolio' ? 'active' : '' }  >Portfólio</a></Link>
                 <Link href={"/contact"}><a className={asPath ==='/contact' ? 'active' : '' }  href="/">Contatos</a></Link>
                </nav>
                <div className='SwicthTheme'>
                    <Switch
                    checked={theme.title === 'ligth'}
                    onChange={props.hendleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                    
                   />
    
                </div>
                
          </div>
      </HeaderContainer>
  );
}
