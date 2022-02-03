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
           <h1>Maycon Goulart <span>Desenvolvedor</span></h1>
           
        </section>

      </main>
       
    </div>
  </>
  );
}
