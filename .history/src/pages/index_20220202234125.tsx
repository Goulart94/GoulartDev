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
        
        <section>
           <h1>hello world</h1>
        </section>

      </main>
       
    </div>
  </>
  );
}
