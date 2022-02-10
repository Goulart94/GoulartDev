import { useRouter } from 'next/router';
import style from '../Header/header.module.scss';

export default function Header() {
    const {asPath} = useRouter();
  return (
      <header className={style.HeaderContainer}>
          <div className={style.HeaderContent}>
              <nav >
                  <a className={asPath === './' ? style.active : ''}>Home</a>
                  <a className={asPath === './abourt' ? style.active : ''}>Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                  
              </nav>
          </div>
      </header>
  );
}
