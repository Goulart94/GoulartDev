import style from '../Header/header.module.scss';

export default function Header() {
  return (
      <header className={style.HeaderContainer}>
          <div className={style.HeaderContent}>
              <nav >
                  <a className={style.active} href='./'>Home</a>
                  <a href='./pages/About/index.tsx'>Sobre</a>
                  <a>Portfólio</a>
                  <a>Contatos</a>
                  
              </nav>
          </div>
      </header>
  );
}
C:\Users\user\OneDrive\Área de Trabalho\projetos\next\goulartdev\src\pages\about