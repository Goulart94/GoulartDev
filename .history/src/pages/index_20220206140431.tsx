import Head from 'next/head';
import style from './home.module.scss';


export default function Home() {
  return (
  <>
    <Head>
    <title>Home | GoulartDev</title>
    </Head>
    <div className={style.backgroundImg}>

      <main className={style.textArea} >
        
        <section className={style.hero}>

           <span> 👋 Hey, welcome!</span>
           <h1>Maycon Goulart <span>Desenvolvedor web</span></h1>
           <p>Tudo o que o seu site precisa para ser encontrado. </p>
        </section>
        <div><img src='./public/imgs/Ilustra.png' /></div>

      </main>
       
    </div>
  </>
  );
}
