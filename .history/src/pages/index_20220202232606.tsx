import Head from 'next/head';
import style from './home.module.scss';


export default function Home() {
  return (
  <>
    <Head>
    <title>Home | GoulartDev</title>
    </Head>
    <div className={style.backgroundImg}>

      <div >
         <h1>hello world</h1>
      </div>
       
    </div>
  </>
  );
}
