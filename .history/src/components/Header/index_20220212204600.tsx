import { useRouter } from 'next/router';
import React from 'react';
import style from '../Header/header.module.scss';
import Switch from '@mui/material/Switch';





export default function Header() {

    const {asPath} = useRouter();

    const [checked, setChecked] = React.useState(false);

    
    
  return (
      
      <header className={style.HeaderContainer}>
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
                    value={checked}
                    onChange={()=>setChecked(!checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                   />
    
                </div>
                
          </div>
      </header>
  );
}
