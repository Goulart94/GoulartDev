import { useRouter } from 'next/router';
import style from '../Header/header.module.scss';

export default function Header() {
    const {asPath} = useRouter();
  return (
      <header className={style.HeaderContainer}>
          <div className={style.HeaderContent}>
              <img src="/logo.png" alt="logo" />
              <nav >
                  <a className={asPath === '/' ? style.active : ''} href="/">Home</a>
                  <a className={asPath ==='/about' ? style.active : '' } href="/about">Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                  
              </nav>
          </div>
      </header>
  );
}
