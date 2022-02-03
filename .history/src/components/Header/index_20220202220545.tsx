import style from '../Header/header.module.scss';

export default function Header() {
  return (
      <header className={style.HeaderContainer}>
          <div className={style.HeaderContent}>
              <nav >
                  <a>Home</a>
                  <a>Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                  
              </nav>
          </div>
      </header>
  );
}
