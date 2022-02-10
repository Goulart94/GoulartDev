import { useRouter } from 'next/router';
import style from '../Header/header.module.scss';

export default function Header() {
    const {asPath} = useRouter
  return (
      <header className={style.HeaderContainer}>
          <div className={style.HeaderContent}>
              <nav >
                  <a className={style.active} href='./'>Home</a>
                  <a href='./about'>Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                  
              </nav>
          </div>
      </header>
  );
}
